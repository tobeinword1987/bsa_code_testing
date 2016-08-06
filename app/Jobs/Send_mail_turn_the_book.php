<?php

namespace App\Jobs;

use App\Jobs\Job;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Book;
use App\User;
use Mail;

class Send_mail_turn_the_book extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    
    protected $user;
    protected $book;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Book $book,User $user)
    {
        $this->user=$user;
        $this->book=$book;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if ($this->book->user_id==$this->user->id)
        {
            $input = [
                'name' => $this->user->firstname.' '.$this->user->lastname,
                'email' => $this->user->email,
                'comment' =>  'Testing queues',
                'subject' => 'Ваша библиотека',
                'year' => $this->book->year,
                'title' => $this->book->title,
            ];

            Mail::queue('emails.turn_book', $input, function($message) use ($input)
            {
                $message->to($input['email'], $input['name']);
                $message->subject($input['subject']);
            });
        }
    }
}
