<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Section;
use Symfony\Component\HttpFoundation\Response;
use DB;

class SectionController extends Controller
{
    /**
     * Display all sections
     *
     * @param
     * @return \Illuminate\Http\Response
     *
     */

    public function index()
    {
        return Section::all();
    }


    /**
     * Create new section
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     *
     */

    public function create(Request $request)
    {
        $section = Section::create($request->only( 'name'));

        return response($section, Response::HTTP_CREATED);
    }


    /**
     * View specific section
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     *
     */

    public function view($id)
    {
        return Section::find($id);
    }


    /**
     * Update specific section
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     *
     */

    public function update(Request $request, $id)
    {
        $section = Section::find($id);
        $section->update($request->only( 'name'));

        return response($section, Response::HTTP_ACCEPTED);
    }


    /**
     * Delete specific section
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     *
     */

    public function delete($id)
    {
        DB::table('sections')->where('id', '=', $id)->delete();
        Section::destroy($id);

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
