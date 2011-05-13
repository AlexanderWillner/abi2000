<?php
// @author: Alex
// @todo: cleanup, comment, ...

require ("pclzip.lib.php");

$temp_file = tempnam(sys_get_temp_dir(), 'abi2000');
$zipfile = new PclZip($temp_file);
$v_list = $zipfile->create(array('../../external/2005/', '../../external/2010/'));
if ($v_list == 0) {
    die ("Error: " . $zipfile->errorInfo(true));
}
header("Content-type: application/octet-stream");
header("Content-disposition: attachment; filename=abi2000.zip");
readfile($temp_file);
?>
