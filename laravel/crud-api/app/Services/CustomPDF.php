<?php

namespace App\Services;

use Barryvdh\DomPDF\PDF as BasePDF;



class CustomPDF extends BasePDF
{
    public function setHeader($view)
    {
        $header = view($view)->render();
        $this->getDomPDF()->getOptions()->set('header-html', $header);
        return $this;
    }

    public function setFooter($view)
    {
        $footer = view($view)->render();
        $this->getDomPDF()->getOptions()->set('footer-html', $footer);
        return $this;
    }
}