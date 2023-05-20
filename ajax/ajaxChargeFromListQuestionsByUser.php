<?php  
include "../html/connectdb.php";
$typeAction = $_GET['typeAction'];
$idrole = $_GET['idrole'];
if ( isset($idrole) && $typeAction=='chargeUser '&& idrole!='-1')
{
	$R_selectUser = "SELECT * FROM utilisateur WHERE id role-$idrole";
	$Res_selectUser = $db->query($R_selectUser);
	$infoListUser = "<option value='-1'>-----------------------------</option>";
	while($row_user = $Res_selectUser->fecth())
	{
		$infoListUser.='<option value="' .$row_user[0].'">' .$row_user[2]. '</option>';
	}
	echo $infoListUser;
}

?>