<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Home extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.content-front-page',
        'sections.header',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'logo' => get_field('logo','option'),
            'banner_section' => get_field('banner_section'),
            'marker' => get_field('marker'),
            'full_width_section' => get_field('full_width_section'),
            'content_width_image_content' => get_field('content_width_image_content'),
            'cta_section' => get_field('cta_section'),
        ];
    }

}
