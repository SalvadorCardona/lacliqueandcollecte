<?php


namespace App\Elementor;


use Elementor\Plugin;

class WidgetsRegister
{
    protected static $instance = null;

    /**
     * @var WidgetBase[]
     */
    private array $widgets;

    public static function getInstance(): self {
        if ( ! isset( static::$instance ) ) {
            static::$instance = new static;
        }

        return static::$instance;
    }

    protected function __construct() {
        add_action('elementor/widgets/widgets_registered', [ $this, 'registerWidget' ]);
    }

    public function registerWidget() {
        foreach ($this->widgets as $widget) {
            Plugin::instance()->widgets_manager->register_widget_type($widget);
        }
    }

    public function addWidget(WidgetBase $widget): void
    {
        $this->widgets []= $widget;
    }
}