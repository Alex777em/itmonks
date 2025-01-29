<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'Se3j>;WoxwAbN5BYYw/drOMx;zabkpr?zq~$|n=7{49@?;A#J;Qr9cY4LS|i*yEv' );
define( 'SECURE_AUTH_KEY',   'RA5E2hjYQ00Us{Rzrt4s:NN_mP. {O/*B.4yht*93hYwGs3*bRqWt8>M4//Qug-;' );
define( 'LOGGED_IN_KEY',     'LDX$ XO4i-_NYIuAJ.*UB+daoTHPo5IPO((oJ!l7*rl]`*KwuxP@M+2b$@<p2sN1' );
define( 'NONCE_KEY',         ',~:%0K6G!EaQe*OT/4|ubrl@ VVnQD;]>wLm>XSP(]&6ckUm0{:]US*Ax/{/XAL(' );
define( 'AUTH_SALT',         '4{iD??50Xz!+C8.VJauf*Mv/Z]2/1+I{r@qgqF-iRE/a9*3Cl)?@G4u$;$2Bwgj;' );
define( 'SECURE_AUTH_SALT',  'pk(thHyFgaB0{G<8@B:lbYN616H[[RhTddK8JG2c8e.tC=poBA3}/M7d$`gl^FRg' );
define( 'LOGGED_IN_SALT',    '>XH}v^6&F#]qGiYgVl@wa|H9jLQ>!?? <%N/ST+yQ >w3&W%*Jz*.^am<sHQ#Mwv' );
define( 'NONCE_SALT',        'E4AgOZ^74-C(oWf.@>)^(tB K<;NhCuoR[1~qFWB}gkG  L31]BRz|T7h@T7 qM+' );
define( 'WP_CACHE_KEY_SALT', '+;G}^xCwPerj:J`Q&J3A}(9+V<5<mYU)-)E/;G4;^mnN<#??6qw>wLg,/nRSJ]@g' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



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
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
