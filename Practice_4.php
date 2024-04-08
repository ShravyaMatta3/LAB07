<!DOCTYPE html>
 
<html>
<body>
  <h1>Multiples Table</h1>
  <p>click <a href="p4.html">here</a> back to the multiple table input page.</p>

  <?php
    $size= $_POST['size'];
    
    echo "<table border =\"1\">";
    for ($row=0; $row<=$size; $row++){
        echo "<tr> \n";
        for ($col=0;$col<=$size; $col++){
            if ($row==0 && $col==0){
                echo "<td> </td>";

            }
            else if($row==0 && $col!=0){
                echo "<td> $col </td>";
            }
            else if($row!=0 && $col==0){
                echo "<td> $row </td>";
            }
            else {
                $product= $row*$col;
                echo "<td>$product</td> \n";
            }
        }
        echo "</tr>";

    }
    
  ?>
</body>
</html>