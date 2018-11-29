<form action=main.php method=post>
<label>ADD RECORD</label><br><br>
Email: <input type=email name=email required placeholder="Email must be unique"><br>
Password: <input type=password name=password required><br>
Lastname: <input type=text name=lastname required><br>
Firstname: <input type=text name=firstname required><br>
Middlename: <input type=text name=middlename required><br><br>
<input type=submit name=insert value="insert record">
</form>



 
<br><br>
<a href=main.php?view=yes>View all records</a>


  
    
    
    </table>



<br><br>
<form method="POST" id="frmLogin">

<label for="login">Search</label>
<input name="search" type="text" class="input-field" placeholder="search by lastname">

<div><input type="submit" name="srch" value="search" class="form-submit-button" /></span></div><br>
</form>