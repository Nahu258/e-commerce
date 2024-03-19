import { Product } from '@/models/Product';
import mongooseConnect from '@/services/mongoose';
import { NextRequest, NextResponse } from 'next/server';

export async function GET (request: NextRequest, response: NextResponse) {
  await mongooseConnect()
  
  try {
    const products = await Product.find({})
    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({error: error})
  }
}