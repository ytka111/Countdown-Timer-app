# Countdown-Timer-app
General description:
Build a countdown timer application that allows users to set timers for specific events. The application will display the remaining time and notify the user when the countdown reaches zero.

Features:
1. Timer Creation:
   - Provide a form to accept user input for the event name and countdown duration.
   - Validate the input to ensure that the event name is not empty and the countdown duration is a positive number.

2. Timer Display:
   - Display the event name, countdown duration, and the remaining time in hours, minutes, and seconds.
   - Update the remaining time dynamically, reducing it every second.

3. Start/Stop Functionality:
   - Implement buttons to start and stop the countdown timer.
   - When the timer is started, it should begin counting down from the specified duration.
   - When the timer is stopped, it should pause at the current remaining time.
   - If the timer is stopped and started again, it should resume from where it left off.

4. Notification:
   - Notify the user when the countdown timer reaches zero. This can be done through an alert message or any other appropriate method.
   - After the notification, the timer should stop and no longer update.

Technical Requirements:
- Use React to build the user interface.
- Use CSS or a CSS preprocessor for styling the user interface, but don’t spend a lot of time on it. It may look ugly but it should show your logical thinking and work well.



Additional Features (Optional):
- Allow users to set multiple timers simultaneously.
- Implement a persistence mechanism to save the timers, so they persist even if the user refreshes the page.
- Provide the ability to delete or edit existing timers.

APIs and Libraries:
You will not need to interact with external APIs for this project, as it mainly focuses on front-end development. 
