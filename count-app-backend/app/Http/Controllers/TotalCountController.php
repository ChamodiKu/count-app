<?php

namespace App\Http\Controllers;

use App\Models\Section;
use Illuminate\Http\Request;
use App\Models\Product;
use Symfony\Component\HttpFoundation\Response;
use DB;

class TotalCountController extends Controller
{
    public function totalcount(Request $request, $id)
    {
        $counts = Section::find($id);

        foreach ($counts as $count){
            $totalcount = $totalcount + $count.tcount;
        }

        return response($totalcount, Response::HTTP_ACCEPTED);
    }


}
