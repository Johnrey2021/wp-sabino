<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package blank
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="stylesheet" href="http://localhost/sabino_kap/wp-content/themes/blank/css/styles.css">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<nav>
      <label class="logo">KAPEtan's Tea House</label>
	      <ul>
	        <li><a href="http://localhost/sabino_kap/">Home</a></li>
	        <li><a href="http://localhost/sabino_kap/shop/">Shop</a></li>
	        <li><a href="http://localhost/sabino_kap/about/">About</a></li>
	        <li><a href="http://localhost/sabino_kap/contact/">Contact</a></li>
	        <li><a href="http://localhost/sabino_kap/my-account/">Account</a></li>
	      </ul>
    </nav>
    <div class="cartlogo">
    	<a href="http://localhost/sabino_kap/cart/">
    	<img src="http://localhost/sabino_kap/wp-content/uploads/2021/05/shopping-cart-512.png" height="50px" width="50px"></a>
    </div>
	