{{--<header class="banner">
  <a class="brand" href="{{ home_url('/') }}">
    {!! $siteName !!}
  </a>

  @if (has_nav_menu('primary_navigation'))
    <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
    </nav>
  @endif
</header>--}}

@if(isset($logo) && $logo)
<header class="text-center pt-8 lg:pb-16">
    <div class="container mx-auto">
        <a href="{{get_home_url()}}"><img class="mx-auto" src="{{$logo['url']}}" alt="{{$logo['alt']}}" /></a>
    </div>
</header>
@endif