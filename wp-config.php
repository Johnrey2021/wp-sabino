<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'db_sabino' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '@5Jz]?Kr:mH L#?Hzik&@F*GgYy,VcgT^~{=fH(=,9X^!k&8JBq:FR*dDP!.g0B/' );
define( 'SECURE_AUTH_KEY',  'S8vnWq>IN r*eYxXM}owXf5{1C89KGoM8I g9!?5Y{S`h*qsh%+42ypmJ*hDMpZS' );
define( 'LOGGED_IN_KEY',    'D&b} =lHNTt3:NHgxew5 #V@(@m6&s%&Sx?s2kJG[5#7,T:AD||~XSBPH9n*me6w' );
define( 'NONCE_KEY',        'n.SZFrLU;bM.Z:ut*ki6[LKv2qOw|KpIJH[(Thj.}Zi-hu;9;=D3H@d7uvX{)cwc' );
define( 'AUTH_SALT',        '59Z%M|%#{VV/]*LgWvcS(1A?o`<XE:,{,r]sNBskK0B05(3-5G(o9![)2&**4xI8' );
define( 'SECURE_AUTH_SALT', '/d?JArMcnRg*[AMs_Gcc*l|%_p~V:0RDa[,na!M)9w$Xt-SXJr?.Kmagl;GNa,Cn' );
define( 'LOGGED_IN_SALT',   'i!y_/$p8if6Kx5oggi]q)oOxP$G!-*U T.F=}Xqb92N^UXS?[X]=hKCN^s2HB$9U' );
define( 'NONCE_SALT',       '}:Pc,-u^q0Jd?4OpAYm}??55/~33zKd[-F-%*YSvxQ0L! PG->[uWk.-L1_oD]xH' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'kap_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
