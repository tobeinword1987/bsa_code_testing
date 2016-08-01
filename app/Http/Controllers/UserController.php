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
            $user['bookscount']=User::find($id)->book->count();
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

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules=array(
            'firstname' => 'required|alpha',
            'lastname' => 'required|alpha',
            'email' => 'required|email|unique:users',
        );

        $validator=Validator::make($request->all(),$rules);

        if ($validator->fails()){
            return response()->json($validator->messages(), 401);
        }
        else{
            $book=new User();
            $book->firstname = $request->get('firstname');
            $book->lastname= $request->get('lastname');
            $book->email= $request->get('email');

            $book->save();
            return response()->json("The new user is added to the library",200);
        }
    }
    
}
