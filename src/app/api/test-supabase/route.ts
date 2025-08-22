import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    console.log('Testing Supabase connection...')
    
    // Test 1: Basic connection
    const { data: testData, error: testError } = await supabase
      .from('subscribers')
      .select('count(*)')
      .limit(1)
    
    if (testError) {
      console.error('Test 1 failed - Connection error:', testError)
      return NextResponse.json({
        success: false,
        test: 'connection',
        error: testError
      }, { status: 500 })
    }
    
    console.log('Test 1 passed - Connection OK')
    
    // Test 2: Insert test record
    const testEmail = `test-${Date.now()}@example.com`
    const { data: insertData, error: insertError } = await supabase
      .from('subscribers')
      .insert([
        {
          email: testEmail,
          source: 'test',
          status: 'active'
        }
      ])
      .select()
    
    if (insertError) {
      console.error('Test 2 failed - Insert error:', insertError)
      return NextResponse.json({
        success: false,
        test: 'insert',
        error: insertError,
        connectionTest: 'passed'
      }, { status: 500 })
    }
    
    console.log('Test 2 passed - Insert OK:', insertData)
    
    // Test 3: Cleanup - Delete test record
    const { error: deleteError } = await supabase
      .from('subscribers')
      .delete()
      .eq('email', testEmail)
    
    if (deleteError) {
      console.warn('Test 3 warning - Cleanup failed:', deleteError)
    }
    
    return NextResponse.json({
      success: true,
      message: 'All Supabase tests passed',
      tests: {
        connection: 'passed',
        insert: 'passed',
        cleanup: deleteError ? 'failed' : 'passed'
      }
    })
    
  } catch (error) {
    console.error('Supabase test error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}