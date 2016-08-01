<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books=DB::table('books')
//            ->select('author','title')
            ->orderBy('updated_at','desc')
            ->get();
//            ->paginate(2);

        return response()->json($books,200);
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
            'title' => 'required',
            'author' => 'required|alpha',
            'year' => 'required|numeric|max:2016|min:1000',
            'genre' => 'required|alpha',
        );

        $validator=Validator::make($request->all(),$rules);

        if ($validator->fails()){
            return response()->json($validator->messages(), 401);
        }
        else{
            $book=new Book();
            $book->title = $request->get('title');
            $book->author= $request->get('author');
            $book->year= $request->get('year');
            $book->genre= $request->get('genre');

            $book->save();
            return response()->json("The new book is added to the library",200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $book=Book::find($id);
        if(!empty($book))
        {
            return response()->json($book,200);
        }
        else
        {
            return response()->json("There is no book with this id=".$id,404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id)
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


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $book=Book::find($id);
        if(!empty($book))
        {
            if($book->user_id==null)
            {
                $book->delete();
                return response()->json("The  book is deleted from library",200);
            }
            else
            {
                return response()->json("The  book couldn't be deleted from library. User reads it.",404);
            }
        }
        else
        {
            return response()->json("There is no book with this id=".$id,404);
        }
    }
}
