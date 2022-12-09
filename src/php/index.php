<?php
include "./sql_muveletek.php";
$url=explode('/',$_SERVER["REQUEST_URI"]);

//Érkező adatok feldolgozása
$erkezettAdatok=file_get_contents("php://input")??null;
$erkezettAdatok=json_decode($erkezettAdatok,true)??null;
//$nev=$erkezettAdatok["NEV"];
//$szoveg=$erkezettAdatok["BEJEGYZES"];

//$feltolt="INSERT INTO `blog`(`NEV`, `BEJEGYZES`) VALUES ('{$nev}','{$szoveg}');";

//SQL művelet végrehajtása
function adatokLekerese($sql)
{
    $db=new mysqli("localhost","root","","blog");
    if($db->connect_error)
    {
        $valasz=array("valasz"=>$db->connect_error);
    }
    else
    {
        $eredmeny=$db->query($sql);
        if($db->errno==0)
        {
            if($eredmeny->num_rows>0)
            {
                $valasz=$eredmeny->fetch_all(MYSQLI_ASSOC);
            }
            else
            {
                $valasz=array("valasz"=>"Nincsenek találati sorok.");
            }
        }
        else
        {
            $valasz=array("valasz"=>$db->error);
        }
    }
    return json_encode($valasz,JSON_UNESCAPED_UNICODE);
}

function adatfeltoltes($sql)
{
    @$db=new mysqli("localhost","root","","blog");
    $uzenet="";
    if($db->connect_error)
    {
        $uzenet=$db->connect_error;
    }
    else
    {
        $db->query($sql);
        
        if($db->errno==0)
        {
            if($db->affected_rows>0)
            {
                $uzenet="Siker!";
            }
            else
            {
                $uzenet="Nincsenek találati sorok.";
            }
        }
        else
        {
            $uzenet=$db->error;
        }
    }
    $valasz=array("valasz"=>$uzenet);
    return json_encode($valasz,JSON_UNESCAPED_UNICODE);
}

//url végződésének vizsgálata
switch (end($url)) {
    case 'blogok':
        echo adatokLekerese($osszesBlog);
        break;

    case 'kuldes':
        echo adatfeltoltes($feltolt);
        break;

    default:
        echo "<h1>Error 404<br/>File not found</h1>";
        break;
}
?>