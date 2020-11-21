<?php


namespace App\Elementor;

use Elementor\Widget_Base;

class TestWidget extends Widget_Base
{

    /**
     * @inheritDoc
     */
    public function get_name(): string
    {
        return 'timer';
    }

    public function get_title() {
        return __( 'timer', 'plugin-name' );
    }

    public function get_icon() {
        return 'fa fa-code';
    }

    public function get_categories() {
        return [ 'general' ];
    }

    protected function _register_controls() {

        $this->start_controls_section(
            'content_section',
            [
                'label' => __( 'Content', 'plugin-name' ),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'url',
            [
                'label' => __( 'URL to embed', 'plugin-name' ),
                'type' => \Elementor\Controls_Manager::TEXT,
                'input_type' => 'url',
                'placeholder' => __( 'https://your-link.com', 'plugin-name' ),
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
            echo "<second-timer></second-timer>";
    }
}