<!DOCTYPE html>
<html>
<head>
    <title>Hi</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Great+Vibes">
    <link rel="stylesheet" href='http://db.onlinewebfonts.com/c/a78cfad3beb089a6ce86d4e280fa270b?family=Calibri'>

    

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


      @font-face {
    font-family: 'CalibriFont';
    src: url({{ storage_path('fonts\Calibri Regular.ttf') }});
    }

    @font-face {
        font-family: 'Vibes';
        src: url("https://fonts.googleapis.com/css?family=Great+Vibes") format('truetype');
        font-weight: normal;
        font-style: normal;
    }
      body {
        font-family: "Calibri";
    }
    h1 {
      font-family: "CalibriFont";
    }
        @page { margin: 100px 25px; }
    header {
      font-family: "Calibri";
      position: fixed;
      top: -60px; 
      left: 0px;
      right: 0px; 
      height: 100px; 
      font-size: 20px !important;
      color: white;
      text-align: center;
    }
    footer { 
      position: fixed; 
      bottom: 0px; 
      left: 0px; 
      right: 0px; 
      font-size: 20px !important;
      height: 50px; 
    }
    /* p { page-break-after: always; } */
    /* p:last-child { page-break-after: never; } */
    .page-content {
        margin-top: 50px;
    }
.page-break {
    page-break-after: always;
}


.td-blue {
    background-color: #c5d9f1;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-collapse: collapse;
  }

  .td-grey {
    background-color: #bfbfbf;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-collapse: collapse;
  }

  .td-white {
    background-color: white;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-collapse: collapse;
  }
  .td-grey p {
    margin-top: 0 !important;
  }
  /*p
  {
      padding:none;
      margin:none;
  }*/
  .border-bottom {
    border-bottom: 1px solid #000;
  }

  #pdf-blo {
    display: block !important;
  }
  .col-box {
    border: 1px solid rgba(77, 85, 101, 0.2);
    padding: 10px;
    box-sizing: border-box;
  }
  .footer-col-box {
    padding: 10px;
    box-sizing: border-box;
    text-align: center;
  }
  .bold-head {
    padding: 0;
    font-size: 14px;
    margin: 0;
    color: #4d5565;
  }
  .col-title {
    padding: 0;
    font-size: 12px;
    margin: 0;
    color: #717784;
  }
  .sub-text {
    padding: 0;
    font-size: 12px;
    margin: 0;
    font-weight: 300;
    color: rgba(77, 85, 101, 0.8);
    margin-top: 10px;
  }
  .text-red {
    color: #b40607;
  }
  .mt-1 {
    margin-top: 1rem;
  }
  .card-title {
    background: #8686861a;
  }
  .card-title td {
    padding: 5px 10px;
  }

  .header-text {
    margin: 0 !important;
    padding: 0 !important;
    font-size: 16px;
  }

  .header-text-red {
    color:#b40607; 
  }
  .header-text-blue {
    color: #4d5565;
  }

  

</style>
</head>
<body>
<header>
    <table width="100%" cellpadding="10">
    <tr class="border-bottom">
      <td width="35%" align="left" style="text-align: left" class="border-bottom">
        <p style="margin: -20px; padding: 0" class="header-text header-text-red">Employee Exit Clearance Certificate</p> 
      </td>
      <td width="32%" align="center" class="border-bottom">|</td>
      <td width="32%" align="right" class="border-bottom">
        <p class="header-text header-text-blue">XS CAD India Private Limited</p>
        <p class="header-text header-text-red">ISO 9001:2015</p>
      </td>
    </tr>
  </table></header>
  <footer style="z-index: -1">
  <table width="100%" cellpadding="10">
    <tr>
      <td colspan="2" class="border-bottom">
        
      </td>
    </tr>
  </table>
  <table width="100%" class="mt-1">
    <tr>
      <td width="20%" align="left">
        
        <img style="max-width: 100%;" src="data:image/png;base64,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"/>
      </td>
      <td width="65%" align="left">
        <h3 class="col-title">© XS CAD. All rights reserved. This document is confidential.</h3>
        <hh class="col-title">Unauthorised use, reproduction, display or distribution is strictly prohibited.</hh>
      </td>
      <!-- <td width="33%" align="right">
        <h3 class="col-title">Page 1 of 1</h3>
      </td> -->
    </tr>
  </table>
</footer>
    <main>
    <div class="page-content">
    <p style="font-size: 60px;">{{ $title }}</p>
    <p>{{ $content }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>
    <div class="page-break"></div>
    <div class="page-content">
    <h1>Page 1</h1>
</div>
<div class="page-break"></div>
<div class="page-content">
<h1>Page 2</h1>
</div>
    </main>
    <script type="text/php">
    if (isset($pdf)) {
        $pdf->page_script('
            $text = sprintf(_("Page %d of %d"),  $PAGE_NUM, $PAGE_COUNT);
            // Uncomment the following line if you use a Laravel-based i18n
            // $text = __("Page :pageNum/:pageCount", ["pageNum" => $PAGE_NUM, "pageCount" => $PAGE_COUNT]);
            $font = null;
            $size = 9;
            $color = array(113,119,255, 0.0);
            $word_space = 0.0;  //  default
            $char_space = 0.0;  //  default
            $angle = 0.0;   //  default

            // Compute text width to center correctly
            $textWidth = $fontMetrics->getTextWidth($text, $font, $size);

            $x = ($pdf->get_width() - $textWidth) - 21;
            $y = $pdf->get_height() - 72;

            $pdf->text($x, $y, $text, $font, $size, $color, $word_space, $char_space, $angle);
        '); // End of page_script
    }
</script>
</body>
</html>