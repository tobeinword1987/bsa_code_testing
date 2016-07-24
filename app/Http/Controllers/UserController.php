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
            return response()->json($user,200);
        }
        else
        {
            return response()->json("There is no user with id=".$id,404);
        }
    }
    


    public function info($id)
    {
//        $books = User::find($id)->book;
        $user=User::find($id);

        if(!empty($user))
        {
        $books= DB::table('books')
            ->select('books.*','users.firstname')
            ->leftJoin('users', 'users.id', '=', 'books.user_id')
            ->where('users.id','=',$id)
            ->get();
//            ->paginate(10);

            if(count($books)>0)
            {
                return response()->json($books,200);
            }
            else
            {
                return response()->json("User with id=".$id." hasn't books from library.",200);
            }

        }
        else{
            return response()->json("There is no user with  id=".$id,404);
        }
    }

    public function turnbook($id)
    {
        $book=Book::find($id);

        if(!empty($book))
        {
            $book->user_id=null;
            $book->save();
            return response()->json("User turned the book with id=".$id." to the library.",200);
        }
        else{
            return response()->json("There is no book with id=".$id." in the library.",404);
        }
    }

    public function getbook($id,$id_user)
    {
        $user=User::find($id_user);
        
        if(!empty($user))
        {
            $book=Book::find($id);
            if(!empty($book))
            {
                $book->user_id=$id_user;

                if($book->save()){
                    return response()->json("User got the book with id=".$id." to the library.",200);
                }
            }
            else
            {
                return response()->json("There is no book with id=".$id." in the library.",404);
            }
        }
        else
        {
            return response()->json("There is no user with  id=".$id_user,404);
        }
    }
}
