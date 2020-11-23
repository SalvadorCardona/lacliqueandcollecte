<?php


namespace App\Elementor;


use Elementor\Plugin;

class WidgetsRegister
{
    /**
     * @var WidgetBase[]
     */
    private array $widgets;

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