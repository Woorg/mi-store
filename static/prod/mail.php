<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # FIX: Replace this email with recipient email
        // $mail_to = "ghandwashand@gmail.com";
        // $mail_to = "electromm@yandex.ru";
        $mail_to = "super.woorg@yandex.ru";
        $mail_to = "gorlov35@gmail.com";

        
        # Sender Data
        $phone = trim($_POST["phone"]);
        
        if ( empty($phone) ) {
            # Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Пожалуйста заполните форму и повторите снова.";
            exit;
        }

        $subject = 'mi:store';
        
        # Mail Content
        $content .= "Телефон: $phone\n";

        # email headers.
        $headers = "From: mi:store &lt;$phone&gt;";

        # Send the email.
        $success = mail($mail_to, $subject, $content, $headers);
        if ($success) {
            # Set a 200 (okay) response code.
            http_response_code(200);
            echo "Спасибо! Ваше сообщение успешно отправленно.";
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Что-то пошло не так, нам не удалось отправить ваше сообщение.";
        }

        } else {
            # Not a POST request, set a 403 (forbidden) response code.
            http_response_code(403);
            echo "С отправкой сообщения возникли проблемы, попробуйте снова.";
        }
