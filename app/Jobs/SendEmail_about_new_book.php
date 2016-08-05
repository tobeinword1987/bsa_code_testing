<?php

namespace App\Jobs;

use App\Jobs\Job;
use App\User;
use App\Book;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Mail;

class SendEmail_about_new_book extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    protected $book;
    protected $user;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Book $book,User $user)
    {
        $this->book=$book;
        $this->user=$user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $input = [
            'name' => $this->user->firstname.' '.$this->user->lastname,
            'email' => $this->user->email,
            'comment' =>  'Testing queues',
            'subject' => 'Ваша библиотека',
            'year' => $this->book->year,
            'title' => $this->book->title,
        ];

        Mail::queue('emails.contact', $input, function($message) use ($input)
        {
            $message->to($input['email'], $input['name']);
            $message->subject($input['subject']);
        });

        //Once you have processed a job, it must be deleted from the queue. If no exception is thrown during the execution of your job, this will be done automatically
//            $this->delete();
    }
}
