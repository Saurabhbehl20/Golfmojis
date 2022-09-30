@if(isset($banner_section) && $banner_section)
<style>
    @if($banner_section['background_image'])
    
        .hero-section{
            background-image: url({{$banner_section['background_image']['url']}});
        }
    
    @endif
    @if($banner_section['mobile_background_image'])
    @media only screen and (max-width:410px){
        .hero-section{
            background-image: url({{$banner_section['mobile_background_image']['url']}});
        }
    }
    @endif
</style>
<section class="hero-section relative pt-24 pb-60 lg:px-20 lg:pt-36 lg:pb-64 2xl:pt-64 2xl:pb-80 bg-cover bg-center">
    <div class="container mx-auto">
        <div class="hero-content relative">
            @if($banner_section['sub_heading'])<h2 class="uppercase italic font-48 dark-grey-color" data-aos="fade-right" data-aos-duration="1000">{!! $banner_section['sub_heading'] !!}</h2>@endif
            @if($banner_section['heading'])<{{$banner_section['heading_type']}} class="uppercase italic" data-aos="fade-right" data-aos-duration="1200">{!! $banner_section['heading'] !!}</{{$banner_section['heading_type']}}>@endif
            @if($banner_section['button'])<a class="site-btn mt-8 dark-grey-color relative inline-block bold" href="{{$banner_section['button']['url']}}" data-aos="fade-right" data-aos-duration="1400" targte="{{empty($banner_section['button']['target']) ? '__self' : $banner_section['button']['target']}}">{{$banner_section['button']['title']}}</a>@endif
        </div>
    </div>
</section>
@endif
@if(isset($marker) && $marker)
@if($marker['background_image'])
    <style> 
        .meet-markers-section{
            background-image: url({{$marker['background_image']['url']}});
        }
    </style>
@endif
<section class="meet-markers-section relative py-20 bg-center lg:hidden overflow-hidden">
    <div class="container mx-auto">
        <div class="meet-markers-content relative">
            @if($marker['maker_heading'])
            <{{$marker['marker_heading_type']}} class="uppercase italic text-center font-48 text-shadow">{!! $marker['maker_heading'] !!}</{{$marker['marker_heading_type']}}>
            @endif
            @if($marker['markers'])
            <div class="responsive pt-16 gap-8 markers-inner">
            @foreach($marker['markers'] as $marker_loop)

                @php 
                   $marker_image =  $marker_loop['image']; 
                    $marker_heading =  $marker_loop['heading']; 
                    $marker_content  =  $marker_loop['content']; 
                @endphp
            
                <div class="text-center">
                    @if($marker_image)<img src="{{$marker_image['url']}}" class="mx-auto mb-5" alt="{{$marker_image['alt']}}" />@endif
                    <span class="mb-7 mx-auto block"></span>
                    @if($marker_heading)<h3 class="font-normal mb-3 uppercase italic dark-grey-color">{!! $marker_heading !!}</h3>@endif
                    {!! $marker_content !!}
                </div>
            @endforeach
            </div>
            @endif
        </div>
    </div>
</section>
<section class="meet-markers-section relative py-20 bg-center lg:px-20 hidden lg:block">
    <div class="container mx-auto">
        <div class="meet-markers-content relative">
        @if($marker['maker_heading'])
            <{{$marker['marker_heading_type']}} data-aos="fade-up" data-aos-duration="1000" class="uppercase italic text-center font-48 text-shadow">{!! $marker['maker_heading'] !!}</{{$marker['marker_heading_type']}}>@endif
            <div class="lg:flex pt-16 gap-8 markers-inner">
                @if($marker['markers'])
                @foreach($marker['markers'] as $marker_loop)
                <div data-aos="zoom-in" data-aos-duration="500" class="lg:w-1/5 text-center">
                    @if($marker_loop['image'])<img src="{{$marker_loop['image']['url']}}" class="mx-auto mb-5" alt="{{$marker_loop['image']['alt']}}" />@endif
                    <span class="mb-7 mx-auto block"></span>
                    @if($marker_loop['heading'])<h3 class="font-normal mb-3 uppercase italic dark-grey-color">{!! $marker_loop['heading'] !!}</h3>@endif
                    {!! $marker_loop['content'] !!}
                </div>
                @endforeach
                @endif
            </div>
        </div>
    </div>
</section>
@endif
@if(isset($full_width_section) && $full_width_section)
<style>
    @if($full_width_section['full_width_background_image'])
    .cta-section{
                background-image: url('{{$full_width_section['full_width_background_image']['url']}}');
            }
    @endif
    @if($full_width_section['mobile_background_image'])
        @media only screen and (max-width:1023px){
            .cta-section{
                background-image: url('{{$full_width_section['mobile_background_image']['url']}}');
            }
        }
    @endif
</style>
<section class="cta-section relative py-20 lg:py-28 bg-cover bg-center text-white overflow-hidden">
    <div class="lg:grid grid-cols-2 gap-2 container mx-auto">
        <div class="col-span-1"></div>
        <div class="cta-content lg:pl-16 text-center lg:text-left">
            @if($full_width_section['full_width_sub_heading'])<h2 data-aos="fade-left" data-aos-duration="1000" class="uppercase italic font-32">{!! $full_width_section['full_width_sub_heading'] !!}</h2>@endif
            @if($full_width_section['full_width_heading'])<{{$full_width_section['full_width_heading_type']}} data-aos="fade-left" data-aos-duration="1200" class="uppercase italic font-48 pt-1 text-shadow">{!! $full_width_section['full_width_heading'] !!}</{{$full_width_section['full_width_heading_type']}}>@endif
            @if($full_width_section['full_width_button'])<a data-aos="fade-left" data-aos-duration="1400" class="site-btn mt-4 dark-grey-color relative inline-block bold" href="{{$full_width_section['full_width_button']['url']}}" target="{{empty($full_width_section['full_width_button']['target']) ? '__self' : $full_width_section['full_width_button']['target'] }}">{{$full_width_section['full_width_button']['title']}}</a>@endif
        </div>
    </div>
</section>
@endif
@if(isset($content_width_image_content) && $content_width_image_content)
{{--@php
$access_token = "IGQVJWTnl2bmt4b3lrUFZAwOGlSWDJ0VGpqQ002bzYxczVYVkxmSzl5ZAE9CeWd4NzdVdkNnODA4SlJxTlVjVENNaFBiWi1iZAV9odGJELXd6TFhRNEVEUVc2ZAkd6a29DWldjbFpkUWZANNV9mbzdIV0JLOQZDZD";
$photo_count = 5;
$json_link = "https://api.instagram.com/v15/self/media/recent?access_token=".$access_token;
var_dump($json_link);
$json = file_get_contents($json_link);
@endphp--}}
  @php
  $fields = "id,media_type,media_url,thumbnail_url,timestamp,permalink,caption";
  $token =  $content_width_image_content['instagram_post']['access_token'];
  $limit = 4; // Set a number of display items

  function fetchData($url){
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_TIMEOUT, 20);
      $result = curl_exec($ch);
      curl_close($ch);
      return $result;
  }

  $result = fetchData("https://graph.instagram.com/me/media?fields={$fields}&access_token={$token}&limit={$limit}");
  $result_decode = json_decode($result, true);

  @endphp
<section class="insta-feed-section relative py-8 lg:px-20 bg-cover bg-center text-white">
    <div class="container mx-auto">
        <div class="lg:flex items-center gap-4 justify-between grid grid-cols-12 lg:block">
            <div class="lg:w-1/4 insta-feed-content text-center lg:text-left col-span-12">
                @if($content_width_image_content['text_1'])<h2 data-aos="fade-right" data-aos-duration="1000" class="uppercase italic font-32">{!! $content_width_image_content['text_1'] !!}</h2>@endif
                @if($content_width_image_content['text_2'])<h3 data-aos="fade-right" data-aos-duration="1200" class="uppercase italic font-48 pt-1 pb-3 text-shadow">{!! $content_width_image_content['text_2'] !!}</h3>@endif
                @if($content_width_image_content['text_3'])<a data-aos="fade-right" data-aos-duration="1400" href="{{$content_width_image_content['text_3']['url']}}" target="{{empty($content_width_image_content['text_3']['target']) ? '_self' : $content_width_image_content['text_3']['target']}}">{!! $content_width_image_content['text_3']['title'] !!}</a>@endif
            </div>
            @if($content_width_image_content['instagram_post']['access_token'])
            @foreach ($result_decode["data"] as $post)  
                @php 
                $permalink = $post["permalink"];
                $media_type = $post["media_type"];
                @endphp                
                @if($media_type == "VIDEO" ) 
                    @php 
                        $media_url = $post["thumbnail_url"]; 
                    @endphp
                @else 
                    @php 
                        $media_url = $post["media_url"];
                    @endphp
                @endif
                <div class="lg:w-2/12 col-span-6">
                    <a class="insta-link" href="<?php echo $permalink; ?>" rel="noopener" target="_blank">
                        <img data-aos="fade-up" data-aos-duration="1000" src="{{$media_url}}"  />
                    </a>
                </div>
                {{--<div class="instagram_new">
                    <a class="insta-link" href="<?php echo $permalink; ?>" rel="noopener" target="_blank">
                    <img src="{{$media_url}}" loading="lazy" class="insta-image">
                    </a>
                </div>--}}
                @endforeach
            @endif
        </div>
    </div>
</section>
@endif
@if(isset($cta_section) && $cta_section)
<style>
   @if($cta_section['mobile_background_image'])
    @media only screen and (max-width:1023px){
        .join-us-section{
            background-image: url({{$cta_section['mobile_background_image']['url']}}) !important;
        }
    }
    @endif
    @if($cta_section['background_image'])
    .join-us-section{
            background-image: url({{$cta_section['background_image']['url']}});
        }
    @endif
</style>
<section class="join-us-section pt-10 pb-5  lg:py-14 lg:px-20 text-center lg:text-left">
    <div class="container mx-auto">
        <div class="block lg:flex lg:flex-row lg:px-20 items-center">
            <div class="lg:w-6/12 w-full  text-white">  
            @if($cta_section['cta_heading'])<{{$cta_section['cta_heading_heading_type']}} data-aos="fade-right" data-aos-duration="1000" class="uppercase font-32 italic pb-5 text-shadow-grey">{!! $cta_section['cta_heading'] !!}</{{$cta_section['cta_heading_heading_type']}}>@endif
            @if($cta_section['cta_content'])<div data-aos="fade-right" data-aos-duration="1200">{!! $cta_section['cta_content'] !!}</div>@endif
            </div>
            <div class="lg:w-6/12">
                {!! do_shortcode($cta_section["form_shortcode"]); !!}         
            </div>
        </div>
    </div>
</section>
@endif