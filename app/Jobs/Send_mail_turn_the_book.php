<?php

namespace App\Jobs;

use App\Jobs\Job;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class Send_mail_turn_the_book extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    
    protected $user;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(User $user,Book $book)
    {
        $this->user=$user;
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

            Mail::queue('turn_book', $input, function($message) use ($input)
            {
                $message->to($input['email'], $input['name']);
                $message->subject($input['subject']);
            });
        }
        else
        {
            InteractsWithQueue::delete();
        }
    }
}
