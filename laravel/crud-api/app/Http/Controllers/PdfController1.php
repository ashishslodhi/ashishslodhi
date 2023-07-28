<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use PDF;
use View;
// reference the Dompdf namespace
use Dompdf\Dompdf;

class PdfController extends Controller
{
    public function generatePDF()
    {
        
        $data = [
            'title' => 'Sample PDF',
            'content' => 'This is a sample PDF generated using dompdf in Laravel.',
        ];
        $pdf = PDF::loadView('myPDF', $data);
        return $pdf->stream('sample.pdf');
    }
}
