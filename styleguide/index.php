<!DOCTYPE html>
<html>
<!-- Document Head -->
<head>
    <meta charset="utf-8">
    <title>SAIT - Prototype and Style Guide</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="description" content="SAIT - Prototype and Style Guide">
    <meta name="author" content="Resolution Interactive Media">

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="57x57" href="/img/favicon/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/img/favicon/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/img/favicon/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/img/favicon/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/img/favicon/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/img/favicon/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/img/favicon/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/img/favicon/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="/img/favicon/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/img/favicon/favicon-194x194.png" sizes="194x194">
    <link rel="icon" type="image/png" href="/img/favicon/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/img/favicon/android-chrome-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="/img/favicon/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="/img/favicon/manifest.json">
    <link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#da291c">
    <link rel="shortcut icon" href="/img/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="/img/favicon/mstile-144x144.png">
    <meta name="msapplication-config" content="/img/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    
    <!-- Slick Slider -->
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.5.9/slick.css"/>

    <!-- Icon Font -->
    <link rel="stylesheet" type="text/css" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"/>

    <!-- Google Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Titillium+Web:400,400italic,600,700' rel='stylesheet' type='text/css'>

    <!-- Tooltipster -->
    <link rel="stylesheet" type="text/css" href="../css/vendor/tooltipster.min.css" />

    <!-- Remodal - modal windows -->
    <link rel="stylesheet" href="../css/vendor/remodal.min.css">
    <link rel="stylesheet" href="../css/vendor/remodal-default-theme.min.css">

    <!--  Global CSS & Style Guide CSS -->
    <link href="css/dest/screen.min.css" rel="stylesheet">

</head>

<body class="testing">
    <a class="g-scroll-up"><span class="ion-chevron-up"></span></a>
    <div class="testing-header">
        <div class="g-container g-clearfix">
            <div class="logo-sm">
                <a href="index.html"><img src="/img/logo-sm.png" alt="logo"></a>
            </div>
            <h1>Style Guide</h1>
        </div>
    </div>
    <div class="g-container">
        <div class="testing-sidebar">
            <div class="testing-sidebar-inner">
                <ul class="testing-menu g-basic">
                    <h4>Global Styling</h4>
                    <hr>
                    <li>
                        <a class="test-scroll g-active" scroll="#text">Text Styling</a>
                        <ul>
                           <li><a class="test-scroll" scroll="#links">Links</a></li>
                        </ul> 
                    </li>
                    <li>
                        <a class="test-scroll" scroll="#colours">Colours</a>
                        <ul>
                           <li><a class="test-scroll" scroll="#bgcolours">Background Colours</a></li>
                           <li><a class="test-scroll" scroll="#brandcolours">Brand Colours</a></li>
                           <li><a class="test-scroll" scroll="#neutrals">Neutrals</a></li>
                        </ul> 
                    </li>
                    <li>
                        <a class="test-scroll" scroll="#resources">External Resources</a>
                        <ul>
                           <li><a class="test-scroll" scroll="#iconfont">Icon Font</a></li>
                           <li><a class="test-scroll" scroll="#animations">Animations</a></li>
                           <li><a class="test-scroll" scroll="#sliders">Sliders</a></li>
                           <li><a class="test-scroll" scroll="#tooltips">Tooltips</a></li>
                           <li><a class="test-scroll" scroll="#lightbox">Lightbox Image Gallery</a></li>
                           <li><a class="test-scroll" scroll="#modalWindow">Modal</a></li>
                           <li><a class="test-scroll" scroll="#twitter">Twitter Integration</a></li>
                           <li><a class="test-scroll" scroll="#instagram">Instagram Integration</a></li>
                        </ul>  
                    </li>
                    <li>
                        <a class="test-scroll" scroll="#tables">Tables</a>
                        <ul>
                           <li><a class="test-scroll" scroll="#responsivetables">Responsive Tables</a></li>
                        </ul> 
                    </li>
                    <li>
                        <a class="test-scroll" scroll="#lists">Lists</a>
                        <ul>
                           <li><a class="test-scroll" scroll="#columnlists">Two Column Lists</a></li>
                           <li><a class="test-scroll" scroll="#basiclists">Basic Lists</a></li>
                           <li><a class="test-scroll" scroll="#orderedlists">Ordered Lists</a></li>
                        </ul>
                    </li>
                    <li><a class="test-scroll" scroll="#grid">Grid System</a></li>
                    <li><a class="test-scroll" scroll="#helper">Helper Classes</a></li>
                    <br>
                    <h4>UI Elements</h4>
                    <hr>
                    <li>
                        <a class="test-scroll" scroll="#buttons">Buttons</a>
                        <ul>
                           <li><a class="test-scroll" scroll="#btngroups">Button Groups</a></li>
                           <li><a class="test-scroll" scroll="#btntoggle">Button Toggle</a></li>
                        </ul> 
                    </li>
                    <li>
                        <a class="test-scroll" scroll="#forms">Forms</a>
                        <ul>
                           <li><a class="test-scroll" scroll="#gridforms">Forms using Grids</a></li>
                           <li><a class="test-scroll" scroll="#inlineforms">Inline Forms</a></li>
                           <li><a class="test-scroll" scroll="#horizontalforms">Horizontal Forms</a></li>
                        </ul> 
                    </li>
                    <li><a class="test-scroll" scroll="#pagination">Pagination</a></li>
                    <li><a class="test-scroll" scroll="#breadcrumbs">Breadcrumbs</a></li>
                    <li>
                        <a class="test-scroll" scroll="#cards">Cards</a>
                        <ul>
                           <li><a class="test-scroll" scroll="#infocards">Important Info Cards</a></li>
                           <li><a class="test-scroll" scroll="#newscards">News Cards</a></li>
                           <li><a class="test-scroll" scroll="#relatedcards">Related Info Cards</a></li>
                           <li><a class="test-scroll" scroll="#smallercards">Smaller Cards</a></li>
                           <li><a class="test-scroll" scroll="#ctacards">CTA Cards</a></li>
                        </ul>
                    </li>
                    <li><a class="test-scroll" scroll="#accordion">Accordions</a></li>
                    <li><a class="test-scroll" scroll="#tabs">Tabs</a></li>
                    <li><a class="test-scroll" scroll="#events">Events</a></li>
                    <br>
                    <h4>Prototype</h4>
                    <hr>     
                    <li><a class="test-scroll" scroll="#prototype">Page Types</a></li>            
                </ul>
            </div>
        </div>
        <div class="testing-body-container">
            <section class="g-active" id="text">
                <h2>Text Styling</h2>
                <hr>
                <h1>h1 Heading</h1>
                <h2>h2 Heading</h2>
                <h3>h3 Heading</h3>
                <h4>h4 Heading</h4>
                <h5>h5 Heading</h5>
                <h6>h6 Heading</h6>

                <h2>h2 Heading</h2>
                <p><em>Proin maximus sapien et imperdiet ultricies.</em> Phasellus tempor urna sit amet erat congue laoreet. Praesent sodales tempus fermentum. Duis hendrerit leo eget ipsum imperdiet, vitae dapibus ante pharetra. Ut quis leo posuere, mollis ex quis, pulvinar neque.</p>       
                <p>Suspendisse et ante pretium, pulvinar massa non, <b>faucibus dui</b>. Nullam aliquam pulvinar lectus. <a>Proin tincidunt eros dolor</a>, at tempus ante commodo quis. Morbi et rhoncus odio. Duis sit amet tortor id metus tempor mollis in ut dui. In vel neque et odio porta pharetra at a lectus. Aenean porttitor tincidunt ipsum, et mollis massa gravida non. Morbi id nunc urna. Maecenas eleifend dui ac imperdiet tristique.</p>
                <h2>h2 Heading</h2>
                <h3>h3 Heading</h3>
                <p>Suspendisse et ante pretium, pulvinar massa non, <b>faucibus dui</b>. Nullam aliquam pulvinar lectus. <a>Proin tincidunt eros dolor</a>, at tempus ante commodo quis. Morbi et rhoncus odio. Duis sit amet tortor id metus tempor mollis in ut dui. In vel neque et odio porta pharetra at a lectus. Aenean porttitor tincidunt ipsum, et mollis massa gravida non. Morbi id nunc urna. Maecenas eleifend dui ac imperdiet tristique.</p>
                <hr>
                <p>Proin aliquam, ante eu faucibus suscipit, mauris nisl porttitor metus, eget feugiat ex elit ac dui. Phasellus vestibulum metus dolor, eget suscipit elit iaculis mattis. Ut imperdiet velit in neque ullamcorper sollicitudin. Pellentesque commodo nec velit tincidunt ultricies. Aliquam eleifend nisl mattis purus varius iaculis. Nunc pretium massa ipsum, ut lobortis neque pharetra imperdiet.</p>
                <h3>h3 Heading</h3>
                <h4>h4 Heading</h4>
                <p>Suspendisse et ante pretium, pulvinar massa non, <b>faucibus dui</b>. Nullam aliquam pulvinar lectus. <a>Proin tincidunt eros dolor</a>, at tempus ante commodo quis. Morbi et rhoncus odio. Duis sit amet tortor id metus tempor mollis in ut dui. In vel neque et odio porta pharetra at a lectus. Aenean porttitor tincidunt ipsum, et mollis massa gravida non. Morbi id nunc urna. Maecenas eleifend dui ac imperdiet tristique.</p>
                <p><em>Proin maximus sapien et imperdiet ultricies.</em> Phasellus tempor urna sit amet erat congue laoreet. Praesent sodales tempus fermentum. Duis hendrerit leo eget ipsum imperdiet, vitae dapibus ante pharetra. Ut quis leo posuere, mollis ex quis, pulvinar neque.</p>       

                <hr class="g-secondary"> 

                <p class="g-drop-cap">Proin aliquam, <b>bold!</b> eu faucibus suscipit, <em>italic here</em> nisl porttitor metus, eget feugiat ex elit ac dui. Phasellus vestibulum metus dolor, eget suscipit elit iaculis mattis. Ut imperdiet velit in neque ullamcorper sollicitudin. Pellentesque commodo nec velit tincidunt ultricies. Aliquam eleifend nisl mattis purus varius iaculis. Nunc pretium massa ipsum, ut lobortis neque pharetra imperdiet.</p>
                <p>Regular paragraph styling</p>
                <p class="g-color-dark">Dark text color</p>
                <p class="g-color-light">Light text color</p>
                <p class="g-color-secondary">Secondary text color</p>
                <p><strong>Bold body font</strong></p>
                <p><em>Italic body font</em></p>
                <p class="g-font-small">Small body font</p>
                <p class="g-font-smaller">Smaller body font</p>
                <p class="g-font-large">Large body font</p>
                <p class="g-font-larger">Larger body font</p>
                <p class="g-font-largest">Largest body font</p>

<pre><xmp><p class="g-drop-cap">Proin aliquam, <b>bold!</b> eu faucibus suscipit, <em>italic here</em> nisl porttitor metus, eget feugiat ex elit ac dui. Phasellus vestibulum metus dolor, eget suscipit elit iaculis mattis. Ut imperdiet velit in neque ullamcorper sollicitudin. Pellentesque commodo nec velit tincidunt ultricies. Aliquam eleifend nisl mattis purus varius iaculis. Nunc pretium massa ipsum, ut lobortis neque pharetra imperdiet.</p>
<p>Regular paragraph styling</p>
<p class="g-color-dark">Dark text color</p>
<p class="g-color-light">Light text color</p>
<p class="g-color-secondary">Secondary text color</p>
<p><strong>Bold body font</strong></p>
<p><em>Italic body font</em></p>
<p class="g-font-small">Small body font</p>
<p class="g-font-smaller">Smaller body font</p>
<p class="g-font-large">Large body font</p>
<p class="g-font-larger">Larger body font</p>
<p class="g-font-largest">Largest body font</p></xmp></pre>

                <div class="g-font-large">Large body font as a heading</div>
                <div class="g-font-larger">Larger body font as a heading</div>
                <div class="g-font-largest">Largest body font as a heading</div>
                <h3 class="g-secondary">Secondary h3 Heading</h3>
                <h4 class="g-secondary">Secondary h4 Heading</h4>
                <div class="g-h4">Heading Styling - sidebars and cards</div>
                <div class="g-h4-lg">Heading Styling Larger</div>

<pre><xmp><div class="g-font-large">Large body font as a heading</div>
<div class="g-font-larger">Larger body font as a heading</div>
<div class="g-font-largest">Largest body font as a heading</div>
<h3 class="g-secondary">Secondary h3 Heading</h3>
<h4 class="g-secondary">Secondary h4 Heading</h4>
<div class="g-h4">Heading Styling - sidebars and cards</div>
<div class="g-h4-lg">Heading Styling Larger</div></xmp></pre>


                <h3 id="links">Links</h3>
                <hr>

                <h3><a>Heading Link</a></h3>
                <a>Standard link</a>
                <br>
                <a>Link with icon<span class="ion-search g-icon-right"></span></a>
                <br>
                <a><span class="ion-ios-arrow-back g-icon-left"></span>Link with icon left</a>
                <br>
                <a>Link with icon right<span class="ion-ios-arrow-forward g-icon-right"></span></a>
                <br>
                <a class="g-link-2">Secondary Link Style</a>
                <br><br>
                <div class="g-bg-grey-1" style="padding: 10px 15px; width: 100%;">
                    <a class="g-link-3">Third Link Style</a>
                </div>

<pre><xmp><h3><a>Heading Link</a></h3>
<a>Standard link</a>
<br>
<a>Link with icon<span class="ion-search g-icon-right"></span></a>
<br>
<a><span class="ion-ios-arrow-back g-icon-left"></span>Link with icon left</a>
<br>
<a>Link with icon right<span class="ion-ios-arrow-forward g-icon-right"></span></a>
<br>
<a class="g-link-2">Secondary Link Style</a>
<br><br>
<div class="g-bg-grey-1" style="padding: 10px 15px; width: 100%;">
    <a class="g-link-3">Third Link Style</a>
</div></xmp></pre>

            <h4>Social Icon Links</h3>
            <hr>

            <div class="g-social-icons">
                <span class="g-text-uppercase"><b>Share:</b></span>
                <a class="ion-social-facebook"></a>
                <a class="ion-social-twitter"></a>
                <a class="ion-social-instagram-outline"></a>
                <a class="ion-social-youtube"></a>
                <a class="ion-social-linkedin"></a>
                <a class="ion-email"></a>
            </div>

<pre><xmp><div class="g-social-icons">
    <span class="g-text-uppercase"><b>Share:</b></span>
    <a class="ion-social-facebook"></a>
    <a class="ion-social-twitter"></a>
    <a class="ion-social-instagram-outline"></a>
    <a class="ion-social-youtube"></a>
    <a class="ion-social-linkedin"></a>
    <a class="ion-email"></a>
</div></xmp></pre>

            </section>

            <section id="buttons">

                <h2>Buttons</h2>
                <hr>

                <a class="g-btn">Primary Button</a>
                <a class="g-btn g-active">Active State</a>
                <a class="g-btn g-disabled">Disabled</a>
                <br><br>
                <a class="g-btn g-btn-block">Primary Block Button</a>
                <br><br>
                <a class="g-btn g-btn-lg">Large Button</a>
                <a class="g-btn g-btn-sm">Small Button</a>
                <br><br>
                <a class="g-btn"><span class="ion-edit g-icon-left"></span>Button with icon</a>
                <br><br>

<pre><xmp><a class="g-btn">Primary Button</a>
<a class="g-btn g-active">Active State</a>
<a class="g-btn g-disabled">Disabled</a>
<br><br>
<a class="g-btn g-btn-block">Primary Block Button</a>
<br><br>
<a class="g-btn g-btn-lg">Large Button</a>
<a class="g-btn g-btn-sm">Small Button</a>
<br><br>
<a class="g-btn"><span class="ion-edit g-icon-left"></span>Button with icon</a></xmp></pre>

                <a class="g-btn-2">Button 2</a>
                <a class="g-btn-2 g-active">Active State</a>
                <a class="g-btn-2 g-disabled">Disabled</a>
                <br><br>
                <a class="g-btn-3">Button 3</a>
                <a class="g-btn-3 g-active">Active State</a>
                <a class="g-btn-3 g-disabled">Disabled</a>
                <br><br>
                <div class="g-bg-grey-2" style="padding: 15px 20px; width: 100%;">
                    <a class="g-btn-3">Button 3</a>
                    <a class="g-btn-3 g-active">Active State</a>
                    <a class="g-btn-3 g-disabled">Disabled</a>
                    <br><br>
                    <a class="g-btn-4">Button 4</a>
                    <a class="g-btn-4 g-active">Active State</a>
                    <a class="g-btn-4 g-disabled">Disabled</a>
                    <br><br>
                    <a class="g-btn-5">Button 5</a>
                    <a class="g-btn-5 g-active">Active State</a>
                    <a class="g-btn-5 g-disabled">Disabled</a>
                </div>

                <br><br>
                <a class="g-btn-6">Button 6</a>
                <a class="g-btn-6 g-active">Active State</a>
                <a class="g-btn-6 g-disabled">Disabled</a>

<pre><xmp><a class="g-btn-2">Button 2</a>
<a class="g-btn-2 g-active">Active State</a>
<a class="g-btn-2 g-disabled">Disabled</a>
<br><br>
<a class="g-btn-3">Button 3</a>
<a class="g-btn-3 g-active">Active State</a>
<a class="g-btn-3 g-disabled">Disabled</a>
<br><br>
<a class="g-btn-4">Button 4</a>
<a class="g-btn-4 g-active">Active State</a>
<a class="g-btn-4 g-disabled">Disabled</a>
<div class="g-bg-grey-1" style="padding: 10px 15px; width: 100%;">
    <a class="g-btn-5">Button 5</a>
    <a class="g-btn-5 g-active">Active State</a>
    <a class="g-btn-5 g-disabled">Disabled</a>
</div></xmp></pre>

                <h3 id="btngroups">Button Groups</h3>
                <hr>

                <div class="g-bg-grey-1" style="padding: 10px 15px; width: 100%;">
                    <div class="g-group">
                        <a class="g-btn-5">Option 1</a>
                        <a class="g-btn-5">Option 2</a>
                        <a class="g-btn-5">Option 3</a>
                    </div>
                </div>

<pre><xmp><div class="g-group">
    <a class="g-btn-5">Option 1</a>
    <a class="g-btn-5">Option 2</a>
    <a class="g-btn-5">Option 3</a>
</div></xmp></pre>

                <h3 id="btntoggle">Button Toggle</h3>
                <hr>

                <div class="g-toggle">
                    <a class="g-btn-2 g-active">Toggle On</a>
                    <a class="g-btn-2">Toggle Off</a>
                </div>

<pre><xmp><div class="g-toggle">
    <a class="g-btn-2 g-active">Toggle On</a>
    <a class="g-btn-2">Toggle Off</a>
</div></xmp></pre>

            </section>

            <section id="colours">

                <h2>Colours</h2>
                <hr>  

                <h3 id="bgcolours">Background Colours</h3>
                <hr>

                <div class="row margin-bottom">
                    <div class="col-1of4">
                        <div class="testing-bg g-bg-1"></div>
                        <p class="g-text-center">#FFFFFF</p>
                    </div>
                    <div class="col-1of4">
                        <div class="testing-bg g-bg-2"></div>
                        <p class="g-text-center">#F7F7F8</p>
                    </div>
                    <div class="col-1of4">
                        <div class="testing-bg g-bg-3"></div>
                        <p class="g-text-center">#F6F7F9</p>
                    </div>
                    <div class="col-1of4">
                        <div class="testing-bg g-bg-4"></div>
                        <p class="g-text-center">#1C232C</p>
                    </div>
                </div>

<pre><xmp><div class="row margin-bottom">
    <div class="col-1of4">
        <div class="testing-bg g-bg-1"></div>
        <p class="g-text-center">#FFFFFF</p>
    </div>
    <div class="col-1of4">
        <div class="testing-bg g-bg-2"></div>
        <p class="g-text-center">#D9DADC</p>
    </div>
    <div class="col-1of4">
        <div class="testing-bg g-bg-3"></div>
        <p class="g-text-center">#F6F7F9</p>
    </div>
    <div class="col-1of4">
        <div class="testing-bg g-bg-4"></div>
        <p class="g-text-center">#1C232C</p>
    </div>
</div></xmp></pre>

                <h3 id="brandcolours">Brand Colours</h3>
                <hr>
                <div class="row margin-bottom">
                    <div class="col-1of5">
                        <div class="testing-bg g-bg-brand-1"></div>
                        <p class="g-text-center">#A6192E</p>
                    </div>
                    <div class="col-1of5">
                        <div class="testing-bg g-bg-brand-2"></div>
                        <p class="g-text-center">#6D2077</p>
                    </div>
                    <div class="col-1of5">
                        <div class="testing-bg g-bg-brand-3"></div>
                        <p class="g-text-center">#005EB8</p>
                    </div>
                    <div class="col-1of5">
                        <div class="testing-bg g-bg-brand-4"></div>
                        <p class="g-text-center">#00A3E0</p>
                    </div>
                    <div class="col-1of5">
                        <div class="testing-bg g-bg-brand-5"></div>
                        <p class="g-text-center">#DA291C</p>
                    </div>
                </div>

<pre><xmp><div class="row margin-bottom">
    <div class="col-1of5">
        <div class="testing-bg g-bg-brand-1"></div>
        <p class="g-text-center">#A6192E</p>
    </div>
    <div class="col-1of5">
        <div class="testing-bg g-bg-brand-2"></div>
        <p class="g-text-center">#6D2077</p>
    </div>
    <div class="col-1of5">
        <div class="testing-bg g-bg-brand-3"></div>
        <p class="g-text-center">#005EB8</p>
    </div>
    <div class="col-1of5">
        <div class="testing-bg g-bg-brand-4"></div>
        <p class="g-text-center">#00A3E0</p>
    </div>
    <div class="col-1of5">
        <div class="testing-bg g-bg-brand-5"></div>
        <p class="g-text-center">#DA291C</p>
    </div>
</div></xmp></pre>

                <h3 id="neutrals">Neutrals</h3>
                <hr>
                <div class="row margin-bottom">
                    <div class="col-1of5">
                        <div class="testing-bg g-bg-grey-1"></div>
                        <p class="g-text-center">#201F1F</p>
                    </div>
                    <div class="col-1of5">
                        <div class="testing-bg g-bg-grey-2"></div>
                        <p class="g-text-center">#324053</p>
                    </div>
                    <div class="col-1of5">
                        <div class="testing-bg g-bg-grey-3"></div>
                        <p class="g-text-center">#565A61</p>
                    </div>
                     <div class="col-1of5">
                        <div class="testing-bg g-bg-grey-4"></div>
                        <p class="g-text-center">#767C86</p>
                    </div> 
                    <div class="col-1of5">
                        <div class="testing-bg g-bg-grey-5"></div>
                        <p class="g-text-center">#d9DADC</p>
                    </div>
                </div>

<pre><xmp><div class="row margin-bottom">
    <div class="col-1of5">
        <div class="testing-bg g-bg-grey-1"></div>
        <p class="g-text-center">#201F1F</p>
    </div>
    <div class="col-1of5">
        <div class="testing-bg g-bg-grey-2"></div>
        <p class="g-text-center">#324053</p>
    </div>
    <div class="col-1of5">
        <div class="testing-bg g-bg-grey-3"></div>
        <p class="g-text-center">#565A61</p>
    </div>
     <div class="col-1of5">
        <div class="testing-bg g-bg-grey-4"></div>
        <p class="g-text-center">#767C86</p>
    </div> 
    <div class="col-1of5">
        <div class="testing-bg g-bg-grey-5"></div>
        <p class="g-text-center">#D9DADC</p>
    </div>
</div></xmp></pre>

            </section>

            <section id="resources">

            <h2>External Resources</h2>
            <hr>

            <h3 id="iconfont">Icon Font - Ion Icons</h3>
            <hr>

            <p><a href="http://ionicons.com/" target="_blank">http://ionicons.com/</a></p>

            <h3 id="animations">Animations - Motion UI</h3>
            <hr>
            <p><a href="http://zurb.com/playground/motion-ui" target="_blank">http://zurb.com/playground/motion-ui</a><br><a href="https://github.com/zurb/motion-ui/blob/master/docs/animations.md" target="_blank">https://github.com/zurb/motion-ui/blob/master/docs/animations.md</a></p>

            <h3 id="sliders">Sliders - Slick Slider</h3>
            <hr>
            <p><a href="https://github.com/kenwheeler/slick" target="_blank">https://github.com/kenwheeler/slick</a><br><a href="http://kenwheeler.github.io/slick/" target="_blank">http://kenwheeler.github.io/slick/</a></p>

            <h3 id="tooltips">Tooltips - Tooltipster</h3>
            <hr>
            <p><a href="http://iamceege.github.io/tooltipster/" target="_blank">http://iamceege.github.io/tooltipster/</a></p>
            <br>

            <span class="tooltip tooltip-style" title="This is a tooltip!">Tooltip Example</span>
                
<pre><xmp><span class="tooltip tooltip-style" title="This is a tooltip!">Tooltip Example</span></xmp></pre>

            <h3 id="lightbox">Lightbox Image Gallery - Swipebox</h3>
            <hr>
            <p><a href="http://brutaldesign.github.io/swipebox" target="_blank">http://brutaldesign.github.io/swipebox</a></p>

            <div class="row no-gutter">
                <div class="col-1of4 sm-1of3 xs-1of1">
                    <a href="../img/01.jpg" class="g-image-gallery-sm swipebox" rel="gallery-1" title="1/8 My Caption" style="background-image: url(../img/01.jpg);">
                    </a>
                </div>
                <div class="col-1of4 sm-1of3 g-xs-hidden">
                    <a href="../img/05.jpg" class="g-image-gallery-sm swipebox" rel="gallery-1" title="2/8 My Caption" style="background-image: url(../img/05.jpg);">
                    </a>
                </div>
                <div class="col-1of4 sm-1of3 g-xs-hidden">
                    <a href="../img/02.jpg" class="g-image-gallery-sm swipebox" rel="gallery-1" title="3/8 My Caption" style="background-image: url(../img/02.jpg);">
                    </a>
                </div>
                <div class="col-1of4 g-sm-hidden g-xs-hidden">
                    <a href="../img/07.jpg" class="g-image-gallery-sm swipebox" rel="gallery-1" title="4/8 My Caption" style="background-image: url(../img/07.jpg);">
                    </a>
                </div>
                <a href="../img/10.jpg" class="swipebox g-hidden" rel="gallery-1" title="5/8 My Caption">
                </a>
                <a href="../img/11.jpg" class="swipebox g-hidden" rel="gallery-1" title="6/8 My Caption">
                </a>
                <a href="../img/12.jpg" class="swipebox g-hidden" rel="gallery-1" title="7/8 My Caption">
                </a>
                <a href="../img/13.jpg" class="swipebox g-hidden" rel="gallery-1" title="8/8 My Caption">
                </a>
            </div>
<pre><xmp><div class="row no-gutter">
    <div class="col-1of4 sm-1of3 xs-1of1">
        <a href="../img/01.jpg" class="g-image-gallery-sm swipebox" rel="gallery-1" title="1/8 My Caption" style="background-image: url(../img/01.jpg);">
        </a>
    </div>
    <div class="col-1of4 sm-1of3 g-xs-hidden">
        <a href="../img/05.jpg" class="g-image-gallery-sm swipebox" rel="gallery-1" title="2/8 My Caption" style="background-image: url(../img/05.jpg);">
        </a>
    </div>
    <div class="col-1of4 sm-1of3 g-xs-hidden">
        <a href="../img/02.jpg" class="g-image-gallery-sm swipebox" rel="gallery-1" title="3/8 My Caption" style="background-image: url(../img/02.jpg);">
        </a>
    </div>
    <div class="col-1of4 g-sm-hidden g-xs-hidden">
        <a href="../img/07.jpg" class="g-image-gallery-sm swipebox" rel="gallery-1" title="4/8 My Caption" style="background-image: url(../img/07.jpg);">
        </a>
    </div>
    <a href="../img/10.jpg" class="swipebox g-hidden" rel="gallery-1" title="5/8 My Caption">
    </a>
    <a href="../img/11.jpg" class="swipebox g-hidden" rel="gallery-1" title="6/8 My Caption">
    </a>
    <a href="../img/12.jpg" class="swipebox g-hidden" rel="gallery-1" title="7/8 My Caption">
    </a>
    <a href="../img/13.jpg" class="swipebox g-hidden" rel="gallery-1" title="8/8 My Caption">
    </a>
</div></xmp></pre>

                <h3 id="modalWindow">Modal Window - Remodal</h3>
                <hr>
                <p><a href="http://vodkabears.github.io/remodal/" target="_blank">http://vodkabears.github.io/remodal/</a></p>
                
                <div class="remodal" data-remodal-id="modal">
                  <button data-remodal-action="close" class="remodal-close"></button>
                  <div class="g-text-center"><h2>Remodal</h2></div>
                  <p>
                    Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
                  </p>
                  <br>
                  <div class="g-text-center">
                      <button data-remodal-action="confirm" class="g-btn g-btn-lg">OK</button>
                  </div>
                </div>

                <a data-remodal-target="modal" class="g-btn-6">Open Modal</a>

<pre><xmp><div class="remodal" data-remodal-id="modal">
  <button data-remodal-action="close" class="remodal-close"></button>
  <div class="g-text-center"><h2>Remodal</h2></div>
  <p>
    Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
  </p>
  <br>
  <div class="g-text-center">
      <button data-remodal-action="confirm" class="g-btn g-btn-lg">OK</button>
  </div>
</div>

<a data-remodal-target="modal" class="g-btn-6">Open Modal</a></xmp></pre>

                <div class="remodal" data-remodal-id="modal2">
                  <button data-remodal-action="close" class="remodal-close"></button>
                  <img src="/img/banner-01.jpg">
                </div>

                <a data-remodal-target="modal2" class="g-btn-6">Open Modal with Image</a>

<pre><xmp><div class="remodal" data-remodal-id="modal2">
  <button data-remodal-action="close" class="remodal-close"></button>
  <img src="/img/banner-01.jpg">
</div>

<a data-remodal-target="modal2" class="g-btn-6">Open Modal with Image</a></xmp></pre>

                <div id="videoRemodal" class="remodal g-lg" data-remodal-id="modal3">
                    <button data-remodal-action="close" class="remodal-close"></button>
                    <iframe id="saitVideo" width="854" height="480" src="https://www.youtube.com/embed/KpV9QBi5JaE?enablejsapi=1" frameborder="0" allowfullscreen allowscriptaccess="always"></iframe>
                </div>

                <a data-remodal-target="modal3" class="g-btn-6">Open Larger Modal with Video</a>

<pre><xmp><div id="videoRemodal" class="remodal g-lg" data-remodal-id="modal3">
    <button data-remodal-action="close" class="remodal-close"></button>
    <iframe id="saitVideo" width="854" height="480" src="https://www.youtube.com/embed/KpV9QBi5JaE?enablejsapi=1" frameborder="0" allowfullscreen allowscriptaccess="always"></iframe>
</div>

<a data-remodal-target="modal3" class="g-btn-6">Open Larger Modal with Video</a></xmp></pre>

                <h3 id="twitter">Twitter Integration</h3>
                <hr>
                <p><a href="http://www.jasonmayes.com/projects/twitterApi/#sthash.nXaCdc1z.qjpIoH36.dpbs" target="_blank">http://www.jasonmayes.com/projects/twitterApi/#sthash.nXaCdc1z.qjpIoH36.dpbs</a></p>
                <p>See /js/scripts.js for JavaScript</p>
                <br>

                <div class="row sm-gutter margin-bottom">
                  <div class="col-1of2">
                     <h3>@SAIT and @SAITAlumni</h3>
                  </div>
                  <div class="col-1of2 g-heading-right-link-3">
                     <span class="g-social-icons">
                         <a class="ion-social-facebook"></a>
                         <a class="ion-social-twitter"></a>
                     </span>
                  </div>
               </div>
               <div class="row sm-gutter margin-bottom">
                  <div class="col-1of3 sm-1of3 lg-1of3">
                     <div id="saitTweet1" class="g-card g-card-info g-card-secondary g-twitter">
                        
                     </div>
                  </div>
                  <div class="col-1of3 sm-1of3 lg-1of3">
                     <div id="saitTweet2" class="g-card g-card-info g-card-secondary g-twitter">
                        
                     </div>
                  </div>
               </div>
               <div class="row sm-gutter margin-bottom g-hidden g-social-hidden">
                  <div class="col-1of3 sm-1of3 lg-1of3">
                     <div id="alumni1" class="g-card g-card-info g-card-secondary g-twitter">
                        
                     </div>
                  </div>
                  <div class="col-1of3 sm-1of2 lg-1of3">
                     <div id="alumni2" class="g-card g-card-info g-card-secondary g-twitter">
                        
                     </div>
                  </div>
               </div>
               <div class="row g-margin-top-sm">
                  <div class="col-1of1 g-text-center">
                     <a class="toggleSocial g-btn-2">Load More</a>
                  </div>
               </div>

<pre><xmp><div class="row sm-gutter margin-bottom">
  <div class="col-1of2">
     <h3>SAIT Social</h3>
  </div>
  <div class="col-1of2 g-heading-right-link-3">
     <span class="g-social-icons">
         <a class="ion-social-facebook"></a>
         <a class="ion-social-twitter"></a>
     </span>
  </div>
</div>
<div class="row sm-gutter margin-bottom">
  <div class="col-1of3 sm-1of3 lg-1of3">
     <div id="saitTweet1" class="g-card g-card-info g-card-secondary g-twitter">
        
     </div>
  </div>
  <div class="col-1of3 sm-1of3 lg-1of3">
     <div id="saitTweet2" class="g-card g-card-info g-card-secondary g-twitter">
        
     </div>
  </div>
</div>
<div class="row sm-gutter margin-bottom g-hidden g-social-hidden">
  <div class="col-1of3 sm-1of3 lg-1of3">
     <div id="alumni1" class="g-card g-card-info g-card-secondary g-twitter">
        
     </div>
  </div>
  <div class="col-1of3 sm-1of2 lg-1of3">
     <div id="alumni2" class="g-card g-card-info g-card-secondary g-twitter">
        
     </div>
  </div>
</div>
<div class="row g-margin-top-sm">
  <div class="col-1of1 g-text-center">
     <a class="toggleSocial g-btn-2">Load More</a>
  </div>
</div></xmp></pre>

                <h3 id="instagram">Instagram Integration</h3>
                <hr>
                <p><a href="http://instafeedjs.com/" target="_blank">http://instafeedjs.com/</a></p>
                <p>See /js/scripts.js for JavaScript</p>
                <p>These credentials have been set up and will need to be managed through SAIT's Instagram account - <a href="https://www.instagram.com/developer/clients/manage/" target="_blank">https://www.instagram.com/developer/clients/manage/</a>. The access token was created here: <a href="http://instagram.pixelunion.net/" target="_blank">http://instagram.pixelunion.net/</a> from inside SAIT's Instagram account.</p>
                <p>To go Live and fully access Instagram content, you will need to submit your application for review and approval. See here: <a target="_blank" href="https://www.instagram.com/developer/review/">https://www.instagram.com/developer/review/</a>.
                <br>

                <div class="row sm-gutter margin-bottom">
                  <div class="col-1of2">
                     <h3>@SAIT</h3>
                  </div>
                  <div class="col-1of2 g-heading-right-link-3">
                     <span class="g-social-icons">
                         <a class="ion-social-instagram-outline"></a>
                     </span>
                  </div>
               </div>
               <div class="row sm-gutter margin-bottom">
                  <div class="col-1of3 sm-1of3 lg-1of3">
                     <div class="g-card g-card-info g-card-secondary g-instagram">
                        <div class="g-card-content-sm g-card-content-full">
                           <a><span class="ion-social-instagram-outline g-icon-left"></span>SAIT</a>
                           <div id="saitInstagram1"></div>
                        </div>
                     </div>
                  </div>
                  <div class="col-1of3 sm-1of3 lg-1of3">
                     <div class="g-card g-card-info g-card-secondary g-instagram">
                        <div class="g-card-content-sm g-card-content-full">
                           <a><span class="ion-social-instagram-outline g-icon-left"></span>SAIT</a>
                           <div id="saitInstagram2"></div>
                        </div>
                     </div>
                  </div>
               </div>

<pre><xmp><div class="row sm-gutter margin-bottom">
  <div class="col-1of3 sm-1of3 lg-1of3">
     <div class="g-card g-card-info g-card-secondary g-instagram">
        <div class="g-card-content-sm g-card-content-full">
           <a><span class="ion-social-instagram-outline g-icon-left"></span>SAIT</a>
           <div id="saitInstagram1"></div>
        </div>
     </div>
  </div>
  <div class="col-1of3 sm-1of3 lg-1of3">
     <div class="g-card g-card-info g-card-secondary g-instagram">
        <div class="g-card-content-sm g-card-content-full">
           <a><span class="ion-social-instagram-outline g-icon-left"></span>SAIT</a>
           <div id="saitInstagram2"></div>
        </div>
     </div>
  </div>
</div></xmp></pre>


            </section>

            <section id="forms">

                <h2>Forms</h2>
                <hr>

                <form>
                    <div class="g-form-group g-error-state">
                        <label for="exampleInput1">First Name:</label>
                        <input type="text" class="g-form-control" id="exampleInput1" placeholder="First Name">
                        <p>Please fill out the required field</p>
                    </div>
                    <div class="g-form-group">
                        <label for="exampleInput1">Last Name:</label>
                        <input type="text" class="g-form-control" id="exampleInput2" placeholder="Last Name">
                    </div>
                    <div class="g-form-group">
                        <label for="exampleQuestion">How can you help you?</label>
                        <textarea rows="3" class="g-form-control" id="exampleQuestion" placeholder="Question"></textarea>
                    </div>
                    <div class="g-form-group g-checkbox">
                        <div class="g-checkbox-heading">Select all that apply:</div>
                        <input type="checkbox" id="checkbox1">
                        <label for="checkbox1"><span>Check me out</span></label>
                        <input type="checkbox" id="checkbox2">
                        <label for="checkbox2"><span>Check me out</span></label>
                        <input type="checkbox" id="checkbox3">
                        <label for="checkbox3"><span>Check me out</span></label>
                    </div>
                    <div class="g-radio-container g-form-group">
                        <div class="g-radio-heading">Please select one:</div>
                        <div>
                            <input id="radio-1" class="g-radio" name="g-radio-group" type="radio" checked>
                            <label for="radio-1" class="g-radio-label">First Choice</label>
                        </div>
                        <div>
                            <input id="radio-2" class="g-radio"name="g-radio-group" type="radio">
                            <label for="radio-2" class="g-radio-label">Second Choice</label>
                        </div>
                        <div>
                            <input id="radio-3" class="g-radio" name="g-radio-group" type="radio">
                            <label for="radio-3" class="g-radio-label">Third Choice</label>
                        </div>
                    </div>
                    <div class="g-form-group">
                        <label>Select one:</label>
                        <select class="g-form-control">
                            <option>Select an option</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div class="g-form-group">
                        <div class="g-input-btn">
                            <label>Enter your email</label>
                            <input type="text" class="g-form-control" id="exampleEmail" placeholder="Email Address">
                            <a class="g-btn">Submit</a>
                        </div>
                    </div>
                </form>

<pre><xmp><form>
    <div class="g-form-group g-error-state">
        <label for="exampleInput1">First Name:</label>
        <input type="text" class="g-form-control" id="exampleInput1" placeholder="First Name">
        <p>Please fill out the required field</p>
    </div>
    <div class="g-form-group">
        <label for="exampleInput1">Last Name:</label>
        <input type="text" class="g-form-control" id="exampleInput2" placeholder="Last Name">
    </div>
    <div class="g-form-group">
        <label for="exampleQuestion">How can you help you?</label>
        <textarea rows="3" class="g-form-control" id="exampleQuestion" placeholder="Question"></textarea>
    </div>
    <div class="g-form-group g-checkbox">
        <div class="g-checkbox-heading">Select all that apply:</div>
        <input type="checkbox" id="checkbox1">
        <label for="checkbox1"><span>Check me out</span></label>
        <input type="checkbox" id="checkbox2">
        <label for="checkbox2"><span>Check me out</span></label>
        <input type="checkbox" id="checkbox3">
        <label for="checkbox3"><span>Check me out</span></label>
    </div>
    <div class="g-radio-container g-form-group">
        <div class="g-radio-heading">Please select one:</div>
        <div>
            <input id="radio-1" class="g-radio" name="g-radio-group" type="radio" checked>
            <label for="radio-1" class="g-radio-label">First Choice</label>
        </div>
        <div>
            <input id="radio-2" class="g-radio"name="g-radio-group" type="radio">
            <label for="radio-2" class="g-radio-label">Second Choice</label>
        </div>
        <div>
            <input id="radio-3" class="g-radio" name="g-radio-group" type="radio">
            <label for="radio-3" class="g-radio-label">Third Choice</label>
        </div>
    </div>
    <div class="g-form-group">
        <label>Select one:</label>
        <select class="g-form-control">
            <option>Select an option</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
    </div>
    <div class="g-form-group">
        <div class="g-input-btn">
            <label>Enter your email</label>
            <input type="text" class="g-form-control" id="exampleEmail" placeholder="Email Address">
            <a class="g-btn">Submit</a>
        </div>
    </div>
</form></xmp></pre>

                <h3 id="gridforms">Forms using grids</h3>
                <hr>

                <form>
                    <div class="g-hidden-labels">
                        <div class="row">
                            <div class="g-form-group col-1of2">
                                <label for="exampleInput1">First Name:</label>
                                <input type="text" class="g-form-control" id="exampleInput1" placeholder="First Name">
                            </div>
                            <div class="g-form-group col-1of2">
                                <label for="exampleInput1">Last Name:</label>
                                <input type="text" class="g-form-control" id="exampleInput2" placeholder="Last Name">
                            </div>
                        </div>
                        <div class="row">
                            <div class="g-form-group col-1of3">
                                <label>Select one:</label>
                                <select class="g-form-control">
                                    <option>Select an option</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div class="g-form-group col-1of3">
                                <label>Select one:</label>
                                <select class="g-form-control">
                                    <option>Select another option</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div class="g-form-group col-1of3">
                                <label>Select one:</label>
                                <select class="g-form-control">
                                    <option>Select another option</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="g-form-group col-1of2">
                                <div class="g-input-btn">
                                    <label for="exampleQuestion">What's your email address?</label>
                                    <input type="text" class="g-form-control" id="exampleEmail" placeholder="Email Address">
                                    <a class="g-btn">Submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

<pre><xmp><form>
    <div class="g-hidden-labels">
        <div class="row">
            <div class="g-form-group col-1of2">
                <label for="exampleInput1">First Name:</label>
                <input type="text" class="g-form-control" id="exampleInput1" placeholder="First Name">
            </div>
            <div class="g-form-group col-1of2">
                <label for="exampleInput1">Last Name:</label>
                <input type="text" class="g-form-control" id="exampleInput2" placeholder="Last Name">
            </div>
        </div>
        <div class="row">
            <div class="g-form-group col-1of3">
                <label>Select one:</label>
                <select class="g-form-control">
                    <option>Select an option</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div class="g-form-group col-1of3">
                <label>Select one:</label>
                <select class="g-form-control">
                    <option>Select another option</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
            <div class="g-form-group col-1of3">
                <label>Select one:</label>
                <select class="g-form-control">
                    <option>Select another option</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="g-form-group col-1of2">
                <div class="g-input-btn">
                    <label for="exampleQuestion">What's your email address?</label>
                    <input type="text" class="g-form-control" id="exampleEmail" placeholder="Email Address">
                    <a class="g-btn">Submit</a>
                </div>
            </div>
        </div>
    </div>
</form></xmp></pre>

                <h3 id="inlineforms">Inline Forms</h3>
                <hr>

                <form>
                    <div class="g-inline-form">
                        <div class="g-form-group">
                            <label for="exampleInput1">First Name:</label>
                            <input type="text" class="g-form-control" id="exampleInput1" placeholder="First Name">
                        </div>
                        <div class="g-form-group">
                            <label for="exampleInput1">Last Name:</label>
                            <input type="text" class="g-form-control" id="exampleInput2" placeholder="Last Name">
                        </div>
                        <div class="g-form-group">
                            <label>Select one:</label>
                            <select class="g-form-control">
                                <option>Select an option</option>
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                        <div class="g-form-group">
                            <div class="g-input-btn">
                                <label for="exampleQuestion">What's your email address?</label>
                                <input type="text" class="g-form-control" id="exampleEmail" placeholder="Email Address">
                                <a class="g-btn">Submit</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-1of1">
                                <div class="g-form-group g-checkbox">
                                    <div class="g-checkbox-heading">Select all that apply:</div>
                                    <input type="checkbox" id="checkbox4">
                                    <label for="checkbox4"><span>Option 1</span></label>
                                    <input type="checkbox" id="checkbox5">
                                    <label for="checkbox5"><span>Another option</span></label>
                                    <input type="checkbox" id="checkbox6">
                                    <label for="checkbox6"><span>And another!</span></label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-1of1">
                                <div class="g-radio-container g-form-group">
                                    <div class="g-radio-heading">Please select one:</div>
                                    <input id="radio-4" class="g-radio" name="g-radio-group" type="radio" checked>
                                    <label for="radio-4" class="g-radio-label">First Choice</label>
                                    <input id="radio-5" class="g-radio"name="g-radio-group" type="radio">
                                    <label for="radio-5" class="g-radio-label">Second Choice</label>
                                    <input id="radio-6" class="g-radio" name="g-radio-group" type="radio">
                                    <label for="radio-6" class="g-radio-label">Third Choice</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

<pre><xmp><form>
    <div class="g-inline-form">
        <div class="g-form-group">
            <label for="exampleInput1">First Name:</label>
            <input type="text" class="g-form-control" id="exampleInput1" placeholder="First Name">
        </div>
        <div class="g-form-group">
            <label for="exampleInput1">Last Name:</label>
            <input type="text" class="g-form-control" id="exampleInput2" placeholder="Last Name">
        </div>
        <div class="g-form-group">
            <label>Select one:</label>
            <select class="g-form-control">
                <option>Select an option</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div class="g-form-group">
            <div class="g-input-btn">
                <label for="exampleQuestion">What's your email address?</label>
                <input type="text" class="g-form-control" id="exampleEmail" placeholder="Email Address">
                <a class="g-btn">Submit</a>
            </div>
        </div>
        <div class="row">
            <div class="col-1of1">
                <div class="g-form-group g-checkbox">
                    <div class="g-checkbox-heading">Select all that apply:</div>
                    <input type="checkbox" id="checkbox4">
                    <label for="checkbox4"><span>Option 1</span></label>
                    <input type="checkbox" id="checkbox5">
                    <label for="checkbox5"><span>Another option</span></label>
                    <input type="checkbox" id="checkbox6">
                    <label for="checkbox6"><span>And another!</span></label>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-1of1">
                <div class="g-radio-container g-form-group">
                    <div class="g-radio-heading">Please select one:</div>
                    <input id="radio-4" class="g-radio" name="g-radio-group" type="radio" checked>
                    <label for="radio-4" class="g-radio-label">First Choice</label>
                    <input id="radio-5" class="g-radio"name="g-radio-group" type="radio">
                    <label for="radio-5" class="g-radio-label">Second Choice</label>
                    <input id="radio-6" class="g-radio" name="g-radio-group" type="radio">
                    <label for="radio-6" class="g-radio-label">Third Choice</label>
                </div>
            </div>
        </div>
    </div>
</form></xmp></pre>

                <h3 id="horizontalforms">Horizontal Forms</h3>
                <hr>

                <form>
                    <div class="g-form-horizontal">
                        <div class="g-form-group row">
                            <label class="col-1of5" for="exampleInput1">First Name:</label>
                            <div class="col-4of5">
                                <input type="text" class="g-form-control" id="exampleInput1" placeholder="First Name">
                            </div>
                        </div>
                        <div class="g-form-group row">
                            <div class="col-1of5">
                                <label for="exampleInput2">Last Name:</label>
                            </div>
                            <div class="col-4of5">
                                <input type="text" class="g-form-control" id="exampleInput2" placeholder="Last Name">
                            </div>
                        </div>
                        <div class="g-form-group row">
                            <div class="col-1of5">
                                <label>Select one:</label>
                            </div>
                            <div class="col-4of5">
                                <select class="g-form-control">
                                    <option>Select an option</option>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                        </div>
                        <div class="g-form-group row">
                            <div class="col-1of5">
                                <div class="g-checkbox-heading">Select all that apply:</div>
                            </div>
                            <div class="col-4of5">
                                <div class="g-checkbox">  
                                    <input type="checkbox" id="checkbox7">
                                    <label for="checkbox7"><span>Option 1</span></label>
                                    <input type="checkbox" id="checkbox8">
                                    <label for="checkbox8"><span>Another option</span></label>
                                    <input type="checkbox" id="checkbox9">
                                    <label for="checkbox9"><span>And another!</span></label>
                                </div>
                            </div>
                        </div>
                        <div class="g-form-group row">
                            <div class="col-1of5">
                                <div class="g-radio-heading">Please select one:</div>
                            </div>
                            <div class="col-4of5">
                                <div class="g-radio-container">
                                    <input id="radio-7" class="g-radio" name="g-radio-group" type="radio" checked>
                                    <label for="radio-7" class="g-radio-label">First Choice</label>
                                    <input id="radio-8" class="g-radio"name="g-radio-group" type="radio">
                                    <label for="radio-8" class="g-radio-label">Second Choice</label>
                                    <input id="radio-9" class="g-radio" name="g-radio-group" type="radio">
                                    <label for="radio-9" class="g-radio-label">Third Choice</label>
                                </div>
                            </div>
                        </div>
                         <div class="g-form-group row">
                            <div class="col-1of5">
                                <div class="g-radio-heading">Inline example:</div>
                            </div>
                            <div class="col-4of5 g-inline-form">
                                <div class="g-radio-container">
                                    <input id="radio-10" class="g-radio" name="g-radio-group" type="radio" checked>
                                    <label for="radio-10" class="g-radio-label">First Choice</label>
                                    <input id="radio-11" class="g-radio"name="g-radio-group" type="radio">
                                    <label for="radio-11" class="g-radio-label">Second Choice</label>
                                    <input id="radio-12" class="g-radio" name="g-radio-group" type="radio">
                                    <label for="radio-12" class="g-radio-label">Third Choice</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

<pre><xmp><form>
    <div class="g-form-horizontal">
        <div class="g-form-group row">
            <label class="col-1of5" for="exampleInput1">First Name:</label>
            <div class="col-4of5">
                <input type="text" class="g-form-control" id="exampleInput1" placeholder="First Name">
            </div>
        </div>
        <div class="g-form-group row">
            <div class="col-1of5">
                <label for="exampleInput2">Last Name:</label>
            </div>
            <div class="col-4of5">
                <input type="text" class="g-form-control" id="exampleInput2" placeholder="Last Name">
            </div>
        </div>
        <div class="g-form-group row">
            <div class="col-1of5">
                <label>Select one:</label>
            </div>
            <div class="col-4of5">
                <select class="g-form-control">
                    <option>Select an option</option>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        </div>
        <div class="g-form-group row">
            <div class="col-1of5">
                <div class="g-checkbox-heading">Select all that apply:</div>
            </div>
            <div class="col-4of5">
                <div class="g-checkbox">  
                    <input type="checkbox" id="checkbox7">
                    <label for="checkbox7"><span>Option 1</span></label>
                    <input type="checkbox" id="checkbox8">
                    <label for="checkbox8"><span>Another option</span></label>
                    <input type="checkbox" id="checkbox9">
                    <label for="checkbox9"><span>And another!</span></label>
                </div>
            </div>
        </div>
        <div class="g-form-group row">
            <div class="col-1of5">
                <div class="g-radio-heading">Please select one:</div>
            </div>
            <div class="col-4of5">
                <div class="g-radio-container">
                    <input id="radio-7" class="g-radio" name="g-radio-group" type="radio" checked>
                    <label for="radio-7" class="g-radio-label">First Choice</label>
                    <input id="radio-8" class="g-radio"name="g-radio-group" type="radio">
                    <label for="radio-8" class="g-radio-label">Second Choice</label>
                    <input id="radio-9" class="g-radio" name="g-radio-group" type="radio">
                    <label for="radio-9" class="g-radio-label">Third Choice</label>
                </div>
            </div>
        </div>
         <div class="g-form-group row">
            <div class="col-1of5">
                <div class="g-radio-heading">Inline example:</div>
            </div>
            <div class="col-4of5 g-inline-form">
                <div class="g-radio-container">
                    <input id="radio-10" class="g-radio" name="g-radio-group" type="radio" checked>
                    <label for="radio-10" class="g-radio-label">First Choice</label>
                    <input id="radio-11" class="g-radio"name="g-radio-group" type="radio">
                    <label for="radio-11" class="g-radio-label">Second Choice</label>
                    <input id="radio-12" class="g-radio" name="g-radio-group" type="radio">
                    <label for="radio-12" class="g-radio-label">Third Choice</label>
                </div>
            </div>
        </div>
    </div>
</form></xmp></pre>

            </section>

            <section id="tables">

                <h2>Tables</h2>
                <hr>

                <table class="g-table">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

<pre><xmp><table class="g-table">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table></xmp></pre>

                
                <h3 id="responsivetables">Responsive Tables</h3>
                <hr>

                <table class="g-table g-table-striped g-tablet-stacked">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a class="g-open-link ion-plus-circled"></a>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td><a class="g-open-link ion-plus-circled"></a>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td><a class="g-open-link ion-plus-circled"></a>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>

<pre><xmp><table class="g-table g-table-striped g-tablet-stacked">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a class="g-open-link ion-plus-circled"></a>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <td><a class="g-open-link ion-plus-circled"></a>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <td><a class="g-open-link ion-plus-circled"></a>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table></xmp></pre>

            </section>

            <section id="lists">

                <h2 id="lists">Lists</h2>
                <hr>

                <ul>
                    <li>Huron County</li>
                    <li>Ontario’s West Coast</li>
                    <li>Invest in Huron</li>
                    <li>Creative Huron
                        <ul>
                            <li>Nested Item</li>
                            <li>Nested Item 2</li>
                        </ul>
                    </li>
                    <li>Make Huron Home</li>
                </ul>

<pre><xmp><ul>
    <li>Huron County</li>
    <li>Ontario’s West Coast</li>
    <li>Invest in Huron</li>
    <li>Creative Huron
        <ul>
            <li>Nested Item</li>
            <li>Nested Item 2</li>
        </ul>
    </li>
    <li>Make Huron Home</li>
</ul></xmp></pre>


                    <h3 id="columnlists">Two Column Lists</h3>
                    <hr>
                    <ul class="g-split-list">
                        <li>4 Nines Cafeteria</li>
                        <li>School of Hospitality and Tourism Main Office</li>
                        <li>The Market Place</li>
                        <li>Food Services Main Office</li>
                        <li>Highwood Dining Room</li>
                    </ul>

<pre><xmp><ul class="g-split-list">
    <li>4 Nines Cafeteria</li>
    <li>School of Hospitality and Tourism Main Office</li>
    <li>The Market Place</li>
    <li>Food Services Main Office</li>
    <li>Highwood Dining Room</li>
</ul></xmp></pre>

                <h3 id="basiclists">Basic Lists</h3>
                <hr>
                <ul class="g-basic">
                    <li>Huron County</li>
                    <li>Ontario’s West Coast</li>
                    <li>Invest in Huron</li>
                    <li>Creative Huron
                        <ul>
                            <li>Nested Item</li>
                            <li>Nested Item 2</li>
                        </ul>
                    </li>
                    <li>Make Huron Home</li>
                </ul>

<pre><xmp><ul class="g-basic">
    <li>Huron County</li>
    <li>Ontario’s West Coast</li>
    <li>Invest in Huron</li>
    <li>Creative Huron
        <ul>
            <li>Nested Item</li>
            <li>Nested Item 2</li>
        </ul>
    </li>
    <li>Make Huron Home</li>
</ul></xmp></pre>

                <h3 id="orderedlists">Ordered Lists</h3>
                <hr>

                <ol>
                    <li>Coffee</li>
                    <li>Milk
                        <ol>
                            <li>Skim Milk</li>
                            <li>Almond Milk</li>
                        </ol>
                    </li>
                    <li>Tea</li>
                </ol>

<pre><xmp><ol>
    <li>Coffee</li>
    <li>Milk
        <ol>
            <li>Skim Milk</li>
            <li>Almond Milk</li>
        </ol>
    </li>
    <li>Tea</li>
</ol></xmp></pre>

            </section>

            <section id="pagination">

                <h2>Pagination</h2>
                <hr>  

                <div class="g-pagination">
                    <a class="g-prev g-disabled"><span class="ion-chevron-left"></span></a>
                    <a class="g-nums">1</a>
                    <a class="g-nums g-active">2</a>
                    <a class="g-nums">3</a>
                    <a class="g-nums">4</a>
                    <a class="g-nums">5</a>
                    <a class="g-next"><span class="ion-chevron-right"></span></a>
                </div>

<pre><xmp><div class="g-pagination">
    <a class="g-prev g-disabled"><span class="ion-chevron-left"></span></a>
    <a class="g-nums g-active">1</a>
    <a class="g-nums">2</a>
    <a class="g-nums">3</a>
    <a class="g-nums">4</a>
    <a class="g-nums">5</a>
    <a class="g-next"><span class="ion-chevron-right"></span></a>
</div></xmp></pre>

            </section>

            <section id="breadcrumbs">

                <h2>Breadcrumbs</h2>
                <hr>

                <div class="g-breadcrumb">
                    <a>Home</a>
                    <span class="ion-ios-arrow-forward"></span>
                    <a>Programs & Courses</a>
                    <span class="ion-ios-arrow-forward"></span>
                    <span>Business</span>
                </div>

<pre><xmp><div class="g-breadcrumb">
    <a>Home</a>
    <span class="ion-ios-arrow-forward"></span>
    <a>Programs & Courses</a>
    <span class="ion-ios-arrow-forward"></span>
    <span>Business</span>
</div></xmp></pre>
                    
            </section>

            <section id="cards">

                <h2>Cards</h2>
                <hr>  

                <div class="row margin-bottom">
                    <div class="col-1of3 sm-1of2">
                        <div class="g-card g-card-info">
                            <a class="g-card-img-header" style="background-image: url(/img/22.jpg);">
                               
                            </a>
                            <div class="g-card-content-sm">
                               <div class="g-font-large"><a>Fee Tables</a></div>
                               <p class="g-font-small">Suspendisse et mattis turpis. Integer a mollis metus. Morbi maximus aliquet nisl, in commodo felis efficitur id.</p>
                            </div>
                         </div>
                    </div>
                    <div class="col-1of3 sm-1of2">
                        <div class="g-card g-card-info">
                            <div class="g-card-content-sm g-card-content-full">
                               <div class="g-h4">Useful Links</div>
                               <ul class="g-basic">
                                  <li><a>Federal Government Registered Plans (RESPs, LLPs)<span class="ion-ios-arrow-forward g-icon-right"></span></a></li>
                                  <li><a>Funding for Apprentices<span class="ion-ios-arrow-forward g-icon-right"></span></a></li>
                                  <li><a>Canadian Forces Subsidized Education Plan<span class="ion-ios-arrow-forward g-icon-right"></span></a></li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>

<pre><xmp><div class="row margin-bottom">
    <div class="col-1of3 sm-1of2">
        <div class="g-card g-card-info">
            <a class="g-card-img-header" style="background-image: url(/img/22.jpg);">
               
            </a>
            <div class="g-card-content-sm">
               <div class="g-font-large"><a>Fee Tables</a></div>
               <p class="g-font-small">Suspendisse et mattis turpis. Integer a mollis metus. Morbi maximus aliquet nisl, in commodo felis efficitur id.</p>
            </div>
         </div>
    </div>
    <div class="col-1of3 sm-1of2">
        <div class="g-card g-card-info">
            <div class="g-card-content-sm g-card-content-full">
               <div class="g-h4">Useful Links</div>
               <ul class="g-basic">
                  <li><a>Federal Government Registered Plans (RESPs, LLPs)<span class="ion-ios-arrow-forward g-icon-right"></span></a></li>
                  <li><a>Funding for Apprentices<span class="ion-ios-arrow-forward g-icon-right"></span></a></li>
                  <li><a>Canadian Forces Subsidized Education Plan<span class="ion-ios-arrow-forward g-icon-right"></span></a></li>
               </ul>
            </div>
        </div>
    </div>
</div></xmp></pre>


                <div class="row sm-gutter margin-bottom">
                    <div class="col-1of3 sm-1of2 lg-1of2">
                        <div class="g-card g-card-info g-card-secondary">
                            <a class="g-card-img-header" style="background-image: url(/img/17.jpg);">
                               
                            </a>
                            <div class="g-card-content-sm">
                               <a><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>
                               <p>This week's #SAIT100 #FaveFriday -> Class of '61 from Gordon H. Anyone know what program? http://ow.ly/zJp93018dCY </p>
                            </div>
                         </div>
                    </div>
                    <div class="col-1of3 sm-1of2 lg-1of2">
                        <div class="g-card g-card-info g-card-secondary g-facebook">
                            <div class="g-card-content-sm g-card-content-full">
                               <a><span class="ion-social-facebook g-icon-left"></span>SAIT Health and Public Safety</a>
                               <p>It was hot, hot, hot for the 13th annual Family Fun Day at Calaway Park on Saturday. Nearly 1,500 people joined us for a free bbq lunch, face painting, balloon artists, and gift bags. All in attendance received Calaway Park season's passes for the whole family and our partner, TD Insurance Meloche Monnex sponsored a draw to send one lucky family to Disneyland.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-1of3 sm-1of2 lg-1of2">
                        <div class="g-card g-card-info g-card-secondary g-instagram">
                            <div class="g-card-content-sm g-card-content-full">
                               <a><span class="ion-social-twitter g-icon-left"></span>SAITAlumni</a>
                               <img src="/img/instagram-1.png" alt="SAITAlumni Instagram">
                            </div>
                        </div>
                    </div>
                    <div class="col-1of3 sm-1of2 lg-1of2">
                        <div class="g-card g-card-info g-card-secondary g-youtube">
                            <div class="g-card-content-sm g-card-content-full">
                               <a><span class="ion-social-youtube g-icon-left"></span>SAIT International Community</a>
                               <img src="/img/video.jpg" alt="SAIT Youtube">
                            </div>
                         </div>
                     </div>
                </div>

<pre><xmp><div class="row margin-bottom">
    <div class="col-1of3 sm-1of2 lg-1of2">
        <div class="g-card g-card-info g-card-secondary">
            <a class="g-card-img-header" style="background-image: url(/img/17.jpg);">
               
            </a>
            <div class="g-card-content-sm">
               <a><span class="ion-social-twitter g-icon-left"></span>@SAIT</a>
               <p>This week's #SAIT100 #FaveFriday -> Class of '61 from Gordon H. Anyone know what program? http://ow.ly/zJp93018dCY </p>
            </div>
         </div>
    </div>
    <div class="col-1of3 sm-1of2 lg-1of2">
        <div class="g-card g-card-info g-card-secondary g-facebook">
            <div class="g-card-content-sm g-card-content-full">
               <a><span class="ion-social-facebook g-icon-left"></span>SAIT Health and Public Safety</a>
               <p>It was hot, hot, hot for the 13th annual Family Fun Day at Calaway Park on Saturday. Nearly 1,500 people joined us for a free bbq lunch, face painting, balloon artists, and gift bags. All in attendance received Calaway Park season's passes for the whole family and our partner, TD Insurance Meloche Monnex sponsored a draw to send one lucky family to Disneyland.</p>
            </div>
        </div>
    </div>
    <div class="col-1of3 sm-1of2 lg-1of2">
        <div class="g-card g-card-info g-card-secondary g-instagram">
            <div class="g-card-content-sm g-card-content-full">
               <a><span class="ion-social-twitter g-icon-left"></span>SAITAlumni</a>
               <img src="/img/instagram-1.png" alt="SAITAlumni Instagram">
            </div>
        </div>
    </div>
    <div class="col-1of3 sm-1of2 lg-1of2">
        <div class="g-card g-card-info g-card-secondary g-youtube">
            <div class="g-card-content-sm g-card-content-full">
               <a><span class="ion-social-youtube g-icon-left"></span>SAIT International Community</a>
               <img src="/img/video.jpg" alt="SAIT Youtube">
            </div>
         </div>
     </div>
</div></xmp></pre>

                <h3 id="newscards">News Cards</h3>
                <hr>

                <div class="row margin-bottom-sm">
                    <div class="col-1of3 sm-1of2">
                        <div class="g-card g-news">
                            <a class="g-card-img-header" style="background-image: url(../img/11.jpg);">
                            </a>
                            <div class="g-card-content">
                                <a class="g-heading">SAIT strikes gold at Provincial Skills</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-1of3 sm-1of2">
                        <div class="g-card g-news">
                            <a class="g-card-img-header" style="background-image: url(../img/04.jpg);">
                            </a>
                            <div class="g-card-content">
                                <a class="g-heading">Explore our Campus</a>
                                <p><span class="ion-clock g-icon-left"></span>3:19</p>
                            </div>
                        </div>
                    </div> 
                </div>

<pre><xmp><div class="row margin-bottom-sm">
    <div class="col-1of3 sm-1of2">
        <div class="g-card g-news">
            <a class="g-card-img-header" style="background-image: url(../img/11.jpg);">
            </a>
            <div class="g-card-content">
                <a class="g-heading">SAIT strikes gold at Provincial Skills</a>
            </div>
        </div>
    </div>
    <div class="col-1of3 sm-1of2">
        <div class="g-card g-news">
            <a class="g-card-img-header" style="background-image: url(../img/04.jpg);">
            </a>
            <div class="g-card-content">
                <a class="g-heading">Explore our Campus</a>
                <p><span class="ion-clock g-icon-left"></span>3:19</p>
            </div>
        </div>
    </div> 
</div></xmp></pre>

                <h4>News Cards - Larger version</h4>
                <hr>

                <div class="row margin-bottom-sm">
                    <div class="col-1of3 sm-1of2 lg-1of2">
                        <div class="g-card g-news g-news-lg">
                            <a class="g-card-img-header" style="background-image: url(/img/01.jpg);">
                            </a>
                            <div class="g-card-content">
                                <a class="g-heading">Drone Fair comes to Calgary</a>
                                <p>Drones are taking over SAIT on Father’s Day weekend as Drone Fair Calgary flies onto campus</p>
                            </div>
                        </div>
                    </div>
                </div>

<pre><xmp><div class="row margin-bottom-sm">
    <div class="col-1of3 sm-1of2 lg-1of2">
        <div class="g-card g-news g-news-lg">
            <a class="g-card-img-header" style="background-image: url(/img/01.jpg);">
        </a>
            <div class="g-card-content">
                <a class="g-heading">Drone Fair comes to Calgary</a>
                <p>Drones are taking over SAIT on Father’s Day weekend as Drone Fair Calgary flies onto campus</p>
            </div>
        </div>
    </div>
</div></xmp></pre>

                <h3 id="infocards">Important Info Cards</h3>
                <hr>

                <div class="g-card g-card-shadow g-card-content">
                   <h3 class="g-secondary">Free Information Session:</h3>
                   <p><b>When:</b> Thursday, March 30 2016 at 5pm<br>
                      <b>Where:</b> Orpheus Theatre, Campus Centre, <a>SAIT Main Campus</a>
                   </p>
                   <p>RSVP by calling 403.284.8818 or email <a>aogp.info@sait.ca</a></p>
                   <p><a>Upcoming Information Sessions<span class="ion-ios-arrow-forward g-icon-right"></span></a></p>
                </div>

<pre><xmp><div class="g-card g-card-shadow g-card-content">
   <h3 class="g-secondary">Free Information Session:</h3>
   <p><b>When:</b> Thursday, March 30 2016 at 5pm<br>
      <b>Where:</b> Orpheus Theatre, Campus Centre, <a>SAIT Main Campus</a>
   </p>
   <p>RSVP by calling 403.284.8818 or email <a>aogp.info@sait.ca</a></p>
   <p><a>Upcoming Information Sessions<span class="ion-ios-arrow-forward g-icon-right"></span></a></p>
</div></xmp></pre>

                <div class="g-card g-card-secondary g-card-content">
                    <div class="vertical-align gutter">
                        <div class="middle g-xs-hidden">
                            <img width="300" src="/img/tour.jpg" class="g-round box-shadow2">
                        </div>
                        <div class="middle">
                           <h3 class="g-secondary">Take the Virtual Tour</h3>
                           <p class="g-font-large">Come explore the buildings and campus of SAIT. Take a virtual tour too of Calgary, and the Rocky Mountains. Excitement is waiting for you.</p>
                           <p><a>SAIT Virtual Tour<span class="ion-forward g-icon-right"></span></a></p>
                        </div>
                    </div>
                </div>

<pre><xmp><div class="g-card g-card-secondary g-card-content">
    <div class="vertical-align gutter">
        <div class="middle g-xs-hidden">
            <img width="300" src="/img/tour.jpg" class="g-round box-shadow2">
        </div>
        <div class="middle">
           <h3 class="g-secondary">Take the Virtual Tour</h3>
           <p class="g-font-large">Come explore the buildings and campus of SAIT. Take a virtual tour too of Calgary, and the Rocky Mountains. Excitement is waiting for you.</p>
           <p><a>SAIT Virtual Tour<span class="ion-forward g-icon-right"></span></a></p>
        </div>
    </div>
</div></xmp></pre>

                <h3 id="relatedcards">Related Info Cards</h3>
                <hr>

                <div class="row margin-bottom">
                    <div class="col-1of2 sm-1of2">
                        <a class="g-card g-related">
                            <div class="g-card-image" style="background-image: url(/img/01.jpg);">
                            </div>
                            <div class="g-card-content">
                                <span class="g-h4">Get ready for SAIT's New Look</span>
                            </div>
                        </a>
                    </div>
                </div>

<pre><xmp><div class="row margin-bottom">
    <div class="col-1of2 sm-1of2">
        <a class="g-card g-related">
            <div class="g-card-image" style="background-image: url(/img/01.jpg);">
            </div>
            <div class="g-card-content">
                <span class="g-h4">Get ready for SAIT's New Look</span>
            </div>
        </a>
    </div>
</div></xmp></pre>

                <h4>Related Info Cards - Larger version</h4>
                <hr>

                <div class="row margin-bottom">
                    <div class="col-2of3">
                        <div class="g-card g-related g-lg">
                            <div class="g-card-image" style="background-image: url(/img/01.jpg);">
                            </div>
                            <div class="g-card-content">
                                <span class="g-h4">Contact Alumni & Development</span>
                                <p>
                                    Room MA113, <a>Heritage Hall </a><br>
                                    Tel: 403.284.7010 <br>
                                    Toll Free: 1.888.284.8399 <br>
                                    <a>alumni@sait.ca</a>
                                </p>
                                <div class="g-social-icons">
                                    <a class="ion-social-facebook"></a>
                                    <a class="ion-social-twitter"></a>
                                    <a class="ion-social-instagram-outline"></a>
                                    <a class="ion-social-youtube"></a>
                                    <a class="ion-social-linkedin"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

<pre><xmp><div class="row margin-bottom">
    <div class="col-2of3">
        <div class="g-card g-related g-lg">
            <div class="g-card-image" style="background-image: url(/img/01.jpg);">
            </div>
            <div class="g-card-content">
                <span class="g-h4">Contact Alumni & Development</span>
                <p>
                    Room MA113, <a>Heritage Hall </a><br>
                    Tel: 403.284.7010 <br>
                    Toll Free: 1.888.284.8399 <br>
                    <a>alumni@sait.ca</a>
                </p>
                <div class="g-social-icons">
                    <a class="ion-social-facebook"></a>
                    <a class="ion-social-twitter"></a>
                    <a class="ion-social-instagram-outline"></a>
                    <a class="ion-social-youtube"></a>
                    <a class="ion-social-linkedin"></a>
                </div>
            </div>
        </div>
    </div>
</div></xmp></pre>
        

                <h3 id="smallercards">Smaller Card</h3>
                <hr>

                <div class="g-card">
                    <div class="g-card-content-sm">
                        <h4>heading</h4>
                        <p>Suspendisse et mattis turpis. Integer a mollis metus. Morbi maximus aliquet nisl, in commodo felis efficitur id. Suspendisse et mattis turpis. Integer a mollis metus. Morbi maximus aliquet nisl, in commodo felis efficitur id.</p>
                    </div>
                </div>

<pre><xmp><div class="g-card">
    <div class="g-card-content-sm">
        <h4>heading</h4>
        <p>Suspendisse et mattis turpis. Integer a mollis metus. Morbi maximus aliquet nisl, in commodo felis efficitur id.</p>
    </div>
</div></xmp></pre>
                    
                <h3 id="ctacards">CTA Cards</h3>
                <hr>

                <a class="g-card g-card-cta">
                    <span class="g-text">
                        Suspendisse et mattis turpis. Integer a mollis metus. Morbi maximus aliquet nisl, in commodo felis efficitur id.<br>
                        <span class="g-small">Secondary Info</span>
                    </span>
                    <span class="g-icon ion-ios-arrow-forward"></span>
                </a>

<pre><xmp><a class="g-card g-card-cta">
    <span class="g-text">
        Suspendisse et mattis turpis. Integer a mollis metus. Morbi maximus aliquet nisl, in commodo felis efficitur id.<br>
        <span class="g-small">Secondary Info</span>
    </span>
    <span class="g-icon ion-ios-arrow-forward"></span>
</a></xmp></pre>

                <h4>Social Icon Cards</h4>
                <hr>

                <div class="g-card g-card-cta g-card-icons">
                    <div class="g-social-icons">
                       <span class="g-text-uppercase"><b>Connect with Us:</b></span>
                       <a class="ion-social-facebook"></a>
                       <a class="ion-social-twitter"></a>
                    </div>
                 </div>

<pre><xmp><div class="g-card g-card-cta g-card-icons">
    <div class="g-social-icons">
       <span class="g-text-uppercase"><b>Connect with Us:</b></span>
       <a class="ion-social-facebook"></a>
       <a class="ion-social-twitter"></a>
    </div>
 </div></xmp></pre>

            </section>

            <section id="accordion">

                <h2>Accordions</h2>
                <hr> 
                <div class="g-accord">
                    <a class="g-accord-header">
                        <span class="g-label">Frequently called numbers</span>
                        <span class="g-icon ion-plus-round"></span>
                    </a>
                    <div class="g-accord-body">
                        <table class="g-table g-table-striped">
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

<pre><xmp><div class="g-accord">
    <a class="g-accord-header">
        <span class="g-label">Frequently called numbers</span>
        <span class="g-icon ion-plus-round"></span>
    </a>
    <div class="g-accord-body">
        <table class="g-table g-table-striped">
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    </div>
</div></xmp></pre>

            </section>

            <section id="tabs">

                <h2>Tabs</h2>
                <hr>  
                <br>
                <br>

                <div class="g-basic-tabs">
                  <div class="g-basic-tabs-inner">
                     <a data-tab=".tab1" class="tabChange g-tab-link g-active">Tab One</a>
                     <a data-tab=".tab2" class="tabChange g-tab-link">Tab Two</a>
                     <a data-tab=".tab3" class="tabChange g-tab-link">Tab Three</a>
                     <a data-tab=".tab4" class="tabChange g-tab-link">Tab Four</a>
                     <a class="tab1 tab4 g-tab-cta g-link-2 g-pull-right g-active">View all Events</a>
                     <a class="tab2 tab3 g-tab-cta g-link-2 g-pull-right">View all</a>
                  </div>
               </div>
               <div class="tab1 g-tab-content g-active">
                    Tab one content... 
               </div>
               <div class="tab2 g-tab-content">
                    Tab two content!!!
               </div>
               <div class="tab3 g-tab-content">
                    Tab three content here.
               </div>
               <div class="tab4 g-tab-content">
                    Tab four content... 
               </div>
               <br>

<pre><xmp><div class="g-basic-tabs">
  <div class="g-basic-tabs-inner">
     <a data-tab=".tab1" class="tabChange g-tab-link g-active">Tab One</a>
     <a data-tab=".tab2" class="tabChange g-tab-link">Tab Two</a>
     <a data-tab=".tab3" class="tabChange g-tab-link">Tab Three</a>
     <a data-tab=".tab4" class="tabChange g-tab-link">Tab Four</a>
     <a class="tab1 tab4 g-tab-cta g-link-2 g-pull-right g-active">View all Events</a>
     <a class="tab2 tab3 g-tab-cta g-link-2 g-pull-right">View all</a>
  </div>
</div>
<div class="tab1 g-tab-content g-active">
    Tab one content... 
</div>
<div class="tab2 g-tab-content">
    Tab two content!!!
</div>
<div class="tab3 g-tab-content">
    Tab three content here.
</div>
<div class="tab4 g-tab-content">
    Tab four content... 
</div></xmp></pre>


            </section>

            <section id="events">

                <h2>Events</h2>
                <hr>  

                <br>

                <div class="row">
                    <div class="col-1of3">
                        <a class="g-event-listing">
                           <div class="g-date">
                              <span>Apr</span>
                              <span>01</span>
                           </div>
                           <div class="g-info">
                              Final transcript deadline for spring/summer term applicants
                           </div>
                        </a>
                    </div>
                </div>

<pre><xmp><a class="g-event-listing">
    <div class="g-date">
      <span>Apr</span>
      <span>01</span>
    </div>
    <div class="g-info">
      Final transcript deadline for spring/summer term applicants
    </div>
</a></xmp></pre>

                <div class="row">
                    <div class="col-1of3">
                        <a class="g-event-listing g-sm">
                            <div class="g-date">
                                <span>Apr</span>
                                <span>02</span>
                            </div>
                            <div class="g-info">
                                Online info session: Medical Laboratory Assistant and Medical Laboratory Technology term applicants
                            </div>
                        </a>
                    </div>
                </div>

<pre><xmp><a class="g-event-listing g-sm">
    <div class="g-date">
        <span>Apr</span>
        <span>02</span>
    </div>
    <div class="g-info">
        Online info session: Medical Laboratory Assistant and Medical Laboratory Technology term applicants
    </div>
</a></xmp></pre>

                


            </section>

            <section id="grid">

                <h2>Grid System</h2>
                <hr>  

                <p>The grid system is created by any combination of 1-8 columns (ie "col-1of6") wrapped in a "row" class to clear floats.</p>
                <p>To change the size of columns based on screen size you may define the columns for larger screens, smaller screens and for mobile by adding "lg-2of3", "sm-1of3", "xs-1of2" to columns respectively.</p>
                <p>To add margin bottom to columns you may add these classes to direct parent "rows": "margin-bottom" and "margin-bottom-sm"</p>
                <p>To change the width of the space between columns add "no-gutter", "sm-gutter", "lg-gutter", "sm-gutter-tablet", "sm-gutter-mobile" to parent "rows".</p>
                <p>You may also add "g-pull-right" to columns to float right instead of left.</p>
                <br><br>

                <div class="row margin-bottom">
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                </div>

                <div class="row margin-bottom-sm">
                    <div class="col-1of5">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of5">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of5">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of5">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of5">
                        <div class="row margin-bottom-sm">
                            <div class="col-1of2 sm-1of2">
                                <div class="testing-unit"></div>
                            </div>
                            <div class="col-1of2 sm-1of2">
                                <div class="testing-unit"></div>
                            </div>
                        </div>
                    </div>
                </div>

<pre><xmp><div class="row margin-bottom">
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
</div>

<div class="row margin-bottom-sm">
    <div class="col-1of5">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of5">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of5">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of5">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of5">
        <div class="row margin-bottom-sm">
            <div class="col-1of2 sm-1of2">
                <div class="testing-unit"></div>
            </div>
            <div class="col-1of2 sm-1of2">
                <div class="testing-unit"></div>
            </div>
        </div>
    </div>
</div></xmp></pre>

                <h3>Smaller Gutter</h3>
                <hr>

                <div class="row sm-gutter margin-bottom">
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                </div>

<pre><xmp><div class="row sm-gutter margin-bottom">
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
</div></xmp></pre>

                <h3>Smaller Gutter - Tablet</h3>
                <hr>

                <div class="row sm-gutter-tablet margin-bottom">
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                </div>

<pre><xmp><div class="row sm-gutter-tablet margin-bottom">
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
</div></xmp></pre>

                <h3>Smaller Gutter - Mobile</h3>
                <hr>

                <div class="row sm-gutter-mobile margin-bottom">
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of6 sm-1of3 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                </div>

<pre><xmp><div class="row sm-gutter-mobile margin-bottom">
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of6 sm-1of3 xs-1of2">
        <div class="testing-unit"></div>
    </div>
</div>
</xmp></pre>

                <h3>Larger Gutter</h3>
                <hr>

                <div class="row lg-gutter margin-bottom">
                    <div class="col-1of4 sm-1of2 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of4 sm-1of2 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of4 sm-1of2 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                    <div class="col-1of4 sm-1of2 xs-1of2">
                        <div class="testing-unit"></div>
                    </div>
                </div>

<pre><xmp><div class="row lg-gutter margin-bottom">
    <div class="col-1of4 sm-1of2 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of4 sm-1of2 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of4 sm-1of2 xs-1of2">
        <div class="testing-unit"></div>
    </div>
    <div class="col-1of4 sm-1of2 xs-1of2">
        <div class="testing-unit"></div>
    </div>
</div></xmp></pre>

                <h3>No Gutter</h3>
                <hr>
                <div class="row no-gutter">
                    <div class="col-1of4 sm-1of2 xs-1of2">
                        <div style="background: url(/img/04.jpg) center center; background-size: cover; height: 200px; width: 100%; display: block;">

                        </div>
                    </div>
                    <div class="col-1of4 sm-1of2 xs-1of2">
                        <div style="background: url(/img/01.jpg) center center; background-size: cover; height: 200px; width: 100%; display: block;">

                        </div>
                    </div>
                    <div class="col-1of4 sm-1of2 xs-1of2">
                        <div style="background: url(/img/08.jpg) center center; background-size: cover; height: 200px; width: 100%; display: block;">

                        </div>
                    </div>
                    <div class="col-1of4 sm-1of2 xs-1of2">
                        <div style="background: url(/img/11.jpg) center center; background-size: cover; height: 200px; width: 100%; display: block;">

                        </div>
                    </div>
                </div>

<pre><xmp><div class="row no-gutter">
    <div class="col-1of4 sm-1of2 xs-1of2">
        <div style="background: url(/img/04.jpg) center center; background-size: cover; height: 200px; width: 100%; display: block;">

        </div>
    </div>
    <div class="col-1of4 sm-1of2 xs-1of2">
        <div style="background: url(/img/01.jpg) center center; background-size: cover; height: 200px; width: 100%; display: block;">

        </div>
    </div>
    <div class="col-1of4 sm-1of2 xs-1of2">
        <div style="background: url(/img/08.jpg) center center; background-size: cover; height: 200px; width: 100%; display: block;">

        </div>
    </div>
    <div class="col-1of4 sm-1of2 xs-1of2">
        <div style="background: url(/img/11.jpg) center center; background-size: cover; height: 200px; width: 100%; display: block;">

        </div>
    </div>
</div></xmp></pre>    

            </section>

            <section id="helper">       

                <h2>Helper Classes</h2>
                <hr>

                <table class="g-table g-table-striped">
                    <thead>
                        <tr>
                            <th>Class Name</th>
                            <th>Usage</th>
                            <th>Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>.g-text-uppercase</td>
                            <td>Uppercase Text</td>
                            <td><span class="g-text-uppercase">Uppercase Text</span></td>
                        </tr>
                        <tr>
                            <td>.g-text-right</td>
                            <td>Right aligned text</td>
                            <td class="g-text-right">Right aligned text</td>
                        </tr>
                        <tr>
                            <td>.g-text-left</td>
                            <td>Left aligned text</td>
                            <td class="g-text-left">Left aligned text</td>
                        </tr>
                        <tr>
                            <td>.g-text-center</td>
                            <td>Center aligned text</td>
                            <td class="g-text-center">Center aligned text</td>
                        </tr>
                        <tr>
                            <td>.g-text-underline</td>
                            <td>Underlined text</td>
                            <td class="g-text-underline">Underlined text</td>
                        </tr>
                        <tr>
                            <td>.g-pull-right</td>
                            <td>Float right</td>
                            <td><span class="g-pull-right">Float right</span></td>
                        </tr>
                        <tr>
                            <td>.g-pull-left</td>
                            <td>Float left</td>
                            <td><span class="g-pull-left">Float left</span></td>
                        </tr>
                        <tr>
                            <td>.g-clearfix</td>
                            <td>To clear floats surround floated elements in .g-clearfix</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.g-margin-bottom, .g-margin-bottom-sm, .g-margin-bottom-lg</td>
                            <td>To add margin bottom</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.g-margin-top, .g-margin-top-sm, .g-margin-top-lg</td>
                            <td>To add margin top</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.g-round</td>
                            <td>To add 50% border radius</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.g-hidden</td>
                            <td>Hides elements on all screens</td>
                            <td><span class="g-hidden">Hidden element</span></td>
                        </tr>
                        <tr>
                            <td>.g-xs-hidden</td>
                            <td>Hides elements in mobile view</td>
                            <td><span class="g-xs-hidden">Mobile hidden element</span></td>
                        </tr>
                        <tr>
                            <td>.g-sm-hidden</td>
                            <td>Hides elements in tablet view</td>
                            <td><span class="g-sm-hidden">Tablet hidden element</span></td>
                        </tr>
                        <tr>
                            <td>.g-lg-hidden</td>
                            <td>Hides elements in desktop view</td>
                            <td><span class="g-lg-hidden">Desktop hidden element</span></td>
                        </tr>
                        <tr>
                            <td>.g-container</td>
                            <td>To wrap page content. (max width of 1200px)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.g-container-lg</td>
                            <td>To wrap page content - wider content. (max width of 1300px)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.g-container-sm</td>
                            <td>To wrap page content - smaller content. (max width of 800px)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.g-container-xs</td>
                            <td>To wrap page content - smallest content. (max width of 700px)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.g-section</td>
                            <td>To wrap page content section, padding top and bottom.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.g-section.g-section-secondary</td>
                            <td>To wrap page content section, padding top and bottom, secondary background colour and borders.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.g-main</td>
                            <td>To wrap all page content.</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>.g-icon-open.ion-record</td>
                            <td>Green dot icon - for open programs.</td>
                            <td><span class="ion-record g-icon-open"></span></td>
                        </tr>
                        <tr>
                            <td>.g-icon-closed.ion-record</td>
                            <td>Red dot icon - for closed programs.</td>
                            <td><span class="ion-record g-icon-closed"></span></td>
                        </tr>
                        <tr>
                            <td>.g-icon-waitlisted.ion-record</td>
                            <td>Yellow dot icon - for waitlisted programs.</td>
                            <td><span class="ion-record g-icon-waitlisted"></span></td>
                        </tr>
                        <tr>
                            <td>.g-secondary</td>
                            <td>Apply to hr tags for secondary hr styling.</td>
                            <td><hr class="g-secondary"></td>
                        </tr>                
                    </tbody>
                </table>

            </section>

            <section id="prototype">

                <h2>Page Types</h2>
                <hr>

                <ol>
                    <li>
                        <div class="g-h4">Homepage</div>
                        <ul>
                            <li><a target="_blank" href="../">Homepage</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="g-h4">Area of Interest Landing Page</div>
                        <ul>
                            <li><a target="_blank" href="../business.html">Business</a></li>
                            <li><a target="_blank" href="../continuing-education.html">Continuing Education</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="g-h4">Programs & Courses List</div>
                        <ul>
                            <li><a target="_blank" href="../programs.html">Programs & Courses</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="g-h4">Program Detail</div>
                        <ul>
                            <li><a target="_blank" href="../applied-business-administration.html">Full Time Program - Bachelor of Applied Business Administration</a></li>
                            <li><a target="_blank" href="../ce-program-detail2.html">CE Non-Credit Program Detail - AutoCAD Certificate of Completion</a></li>
                            <li><a target="_blank" href="../ce-program-detail.html">CE Credit Program Detail - Legal Administrative Certificate of Achievement</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="g-h4">Landing Page</div>
                        <ul>
                            <li><a target="_blank" href="../admissions.html">Admissions</a></li>
                            <li><a target="_blank" href="../student-resources.html">Student Resources</a></li>
                            <li><a target="_blank" href="../about-sait.html">About SAIT</a></li>
                            <li><a target="_blank" href="../work-at-sait.html">Work at SAIT</a></li>
                            <li><a target="_blank" href="../aris.html">Applied Research and Innovation Services</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="g-h4">Hub Page</div>
                        <ul>
                            <li><a target="_blank" href="../paying-for-it.html">Paying for It</a></li>
                            <li><a target="_blank" href="../services-for-students.html">Services for Students</a></li>
                            <li><a target="_blank" href="../future-students.html">Future Students</a></li>
                            <li><a target="_blank" href="../current-students.html">Current Students</a></b></li>
                            <li><a target="_blank" href="../campus.html">SAIT Campus</a></li>
                            <li><a target="_blank" href="../health-public-safety.html">Schools - School of Health and Public Safety</a></li>
                            <li><a target="_blank" href="../apprenticeships.html">Apprenticeships and Trades</a></li>
                            <li><a target="_blank" href="../international-students.html">International Students</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="g-h4">Two Column Basic Page</div>
                        <ul>
                            <li><a target="_blank" href="../basic.html">Basic Page Example</a></li>
                            <li><a target="_blank" href="../page-components.html">Page Components</a></li>
                            <li><a target="_blank" href="../contact-us.html">Contact Us</a></li>
                            <li><a target="_blank" href="../campus-map.html">Campus Map</a></li>
                            <li><a target="_blank" href="../course-detail.html">Course Detail</a></li>
                            <li><a target="_blank" href="../top-five.html">Top Five</a></li>
                            <li><a target="_blank" href="../news-detail.html">News Detail</a></li>
                            <li><a target="_blank" href="../event-detail.html">Event Detail</a></li>
                            <li><a target="_blank" href="../search-results.html">Search Results</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="g-h4">Single Column Basic Page</div>
                        <ul>
                            <li><a target="_blank" href="../how-to-apply.html">How to Apply</a></li>
                            <li><a target="_blank" href="../events.html">Events</a></li>
                            <li><a target="_blank" href="../news.html">News</a></li>
                        </ul>
                    </li>
                    <li>
                        <div class="g-h4">How to Apply Interactive</div>
                        <ul>
                            <li>How to Apply Interactive (Sprint 4+)</li>
                        </ul>
                    </li>
                    <li>
                        <div class="g-h4">Media</div>
                        <ul>
                            <li><a target="_blank" href="../news-and-events.html">News & Events</a></li>
                            <li><a target="_blank" href="../media-centre.html">Media Centre</a></li>
                            <li><a target="_blank" href="../donors.html">Donors</a></li>
                            <li><a target="_blank" href="../alumni.html">Alumni</a></li>
                        </ul>
                    </li>
                </ol>
     
            </section>


        </div>
    </div>

    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

    <!-- Slick Slider -->
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.5.9/slick.min.js"></script>

    <!-- Compiled and minified vendor JS files (from js/vendor) - Twitter Feed, Remodal - for modals, Swipebox - for lightbox gallery, Tooltipster -->
    <script src="../js/dest/vendor-min.js"></script>

    <!-- Main JS file -->
    <script src="../js/dest/scripts-min.js"></script>

     <!-- Style Guide JS -->
    <script src="js/scripts.js"></script>

</body>


</html>