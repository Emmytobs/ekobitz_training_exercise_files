5. An environment variable is usually created to store a specific piece of data so that that data can be retrieved anytime it is needed.

6. To permanently save an environment variable FIRST_NAME for instance, you need to add the command: export FIRST_NAME="YOUR_FIRST_NAME" to your .zshrc or .bash_profile configuration file.

7. A process is an ongoing operation taking place on your computer

8. You can list all processes using the ps aux command

9. A PID is a unique identifier for each process running on your computer

10. A procees can be terminated using the **kill** command (or **kill -9** command for a process that is frozen) preceeded by the PID of the process

11. The kill command terminates a process, while the kill -9 command forcefully terminates a frozen or crashed process. 

12. The -i flag when paired with the grep command allows for a case-insensitive search

13. The -B flag when paired with the grep command displays the specified number of lines before the match specified by the grep command.

> Example: **grep -B 3 "Nissan" awesome_cars.txt.**
> This lists the three cars that are placed before the text *Nissan* in the awesome_cars.txt file

14. The -C flag when paired with the grep command displays the specified number of lines around the match specified by the grep command.

> Example: **grep -C 3 "Nissan" awesome_cars.txt.**
> This lists the three cars that are placed before and after the text *Nissan* in the awesome_cars.txt file

15. The -A flag when paired with the grep command displays the specified number of lines after the match specified by the grep command.

> Example: **grep -A 3 "Nissan" awesome_cars.txt.**
> This lists the three cars that are placed after the text *Nissan* in the awesome_cars.txt file

16. The -w flag paired with the grep command displayed a full word search of the specified word appended to the command

17. The -n flag when paired with the grep command displays the line number of the matched word in a specific text file