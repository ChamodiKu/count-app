<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Symfony\Component\HttpFoundation\Response;
use DB;

class ProductController extends Controller
{
    /**
     * Display all products
     *
     * @param
     * @return \Illuminate\Http\Response
     *
     */

    public function index()
    {
        return Product::all();
    }


    /**
     * Create new product
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     *
     */

    public function create(Request $request)
    {
        $product = Product::create($request->only('title', 'name', 'price', 'category'));

        return response($product, Response::HTTP_CREATED);
    }


    /**
     * View specific product
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     *
     */

    public function view($id)
    {
        return Product::find($id);
    }


    /**
     * Update specific product
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     *
     */

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        $product->update($request->only('title', 'name', 'price', 'category'));

        return response($product, Response::HTTP_ACCEPTED);
    }


    /**
     * Delete specific product
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     *
     */

    public function delete($id)
    {
        DB::table('products')->where('id', '=', $id)->delete();
        Product::destroy($id);

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
