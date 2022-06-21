<?php 
include 'config.php';

$db = new PDO($db_dsn, $db_user, $db_pass, $db_options);

/*recibo los datos del formulario*/
$nombre = $_POST['nombre'];
$nombre = $_POST['apellido'];
$email = $_POST['email'];
$mensaje=$_POST['celular'];

/*guardo los datos en la db*/
$sql = 'insert into contacto (nombre, apellido, email, celular) values (?, ?, ?,?)'; //nombres de las columnas de la db
$sql_params = [$nombre, $apellidp, $email, $celular];

$st = $db->prepare($sql);
$st->execute($sql_params);

header('Location: ' . 'form-success-barras.html');


// fin


?>

