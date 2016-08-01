<?php

namespace App\Http\Controllers;

use App\Book;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user=User::find($id);

        if(!empty($user))
        {
            $user['books']=User::find($id)->book;
            return response()->json($user,200);
        }
        else
        {
            return response()->json("There is no user with id=".$id,404);
        }
    }

    public function index()
    {
        $users=DB::table('users')
//            ->select('author','title')
            ->orderBy('updated_at','desc')
            ->get();
//            ->paginate(2);

        return response()->json($users,200);
    }
    
}
