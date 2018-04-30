<?php 
    include("database.php");
    $query = "SELECT * FROM cordone";
    $result = mysqli_query($con,$query);
    $output = "";
    if($result != null){
        while($row = $result->fetch_assoc()){
            $output.= $row['altut']. ":" .$row['longt']. ":" .$row['emi']. ":"."</br>";
        }
        echo $output;
    }
?>