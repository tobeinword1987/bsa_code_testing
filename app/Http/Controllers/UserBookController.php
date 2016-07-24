<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\User;
use App\Book;

class UserBookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id_user,$id_book)
    {
        return $id_user;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id_user,$id_book)
    {

        $user=User::find($id_user);

        if(!empty($user))
        {
            $book=Book::find($id_book);
            if(!empty($book))
            {

                if($book->user_id==null)
                {
                    $book->user_id=$id_user;

                    $book->save();
                    return response()->json("User got the book with id=".$id_book,200);
                }
                else
                {
                    return response()->json("Another reader has got this book. It is not in library now.",200);
                }
            }
            else
            {
                return response()->json("There is no book with id=".$id_book." in the library.",404);
            }
        }
        else
        {
            return response()->json("There is no user with  id=".$id_user,404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
