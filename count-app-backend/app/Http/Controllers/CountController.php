<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Count;
use Symfony\Component\HttpFoundation\Response;
use DB;

class CountController extends Controller
{
    /**
     * Display all counts
     *
     * @param
     * @return \Illuminate\Http\Response
     *
     */

    public function index()
    {
//        return Count::all();
        $viewall = Count::select(['id', 'product_id', 'section_id', 'tcount'])
            ->with('product:id,name')
            ->with('section:id,name')
            ->get();

        return response($viewall, Response::HTTP_ACCEPTED);
    }


    /**
     * Create new count
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     *
     */

    public function create(Request $request)
    {
        $count = Count::create($request->only('product_id', 'section_id', 'tcount'));

        return response($count, Response::HTTP_CREATED);
    }


    /**
     * View specific count
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     *
     */

    public function view($id)
    {
//        return Count::find($id);
        $view = Count::select(['id', 'product_id', 'section_id', 'tcount'])
            ->with('product:id,name')
            ->with('section:id,name')
            ->where('id','=',$id)
            ->get();

        return response($view, Response::HTTP_ACCEPTED);
    }


    /**
     * Update specific count
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     *
     */

    public function update(Request $request, $id)
    {
        $count = Count::find($id);
        $count->update($request->only('product_id', 'section_id', 'tcount'));

        return response($count, Response::HTTP_ACCEPTED);
    }


    /**
     * Delete specific count
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     *
     */

    public function delete($id)
    {
        DB::table('counts')->where('id', '=', $id)->delete();
        Count::destroy($id);

        return response(null, Response::HTTP_NO_CONTENT);
    }


    /**
     * View count by specific product_id
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     *
     */

    public function viewByProduct($id)
    {
        $viewbyproduct = Count::select(['id', 'product_id', 'section_id', 'tcount'])
                        ->with('product:id,name')
                        ->with('section:id,name')
                        ->where('product_id','=',$id)
                        ->get();

        return response($viewbyproduct, Response::HTTP_ACCEPTED);
    }


    /**
     * View count by specific section_id
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     *
     */

    public function viewBySection($id)
    {
        $viewbysection = Count::select(['id', 'product_id', 'section_id', 'tcount'])
            ->with('product:id,name')
            ->with('section:id,name')
            ->where('section_id','=',$id)
            ->get();

        return response($viewbysection, Response::HTTP_ACCEPTED);
    }
}
