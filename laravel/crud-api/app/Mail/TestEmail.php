<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Address;



use Illuminate\Queue\SerializesModels;

class TestEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */

    public $mailData;

    public function __construct($mailData)
    {
        $this->mailData = $mailData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    // public function build()
    // {
    //     $sentData =  $this->from('ashishsciit@gmail.com', 'Ashish Laravel')->subject('Test Email')->view('email.test');

    //     // dd('sent data: ', $sentData);
    //     return $sentData;
    // }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('emanage@xscad2.com', 'Ashish Laravel'),
            subject: 'New email from laravel smtp'
        );
    }

    public function content(): Content
    {
        return new Content(
            view: 'email.test',
            with: [
                'mailData' => $this->mailData
            ]
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
