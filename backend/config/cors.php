<?php 
return [    
    // 'paths' => ['*'],
    'paths' => ['api/*', '*'],
    // 'allowed_methods' => ['*'],
    'allowed_methods' => ['POST', 'GET', 'DELETE', 'PUT', '*'],
    // 'allowed_origins' => ['*'],
    'allowed_origins' => ['http://localhost:3000', '*'],
    'allowed_origins_patterns' => [],
    // 'allowed_headers' => ['*'],
    'allowed_headers' => ['Access-Control-Request-Method', 'Access-Control-Request-Headers', '*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];