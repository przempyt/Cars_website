    $(function () {
        $("#carform").on('submit', function (e) {
            e.preventDefault();

            $.ajax({
                type: "POST",
                url: "addCar",
                data: $("#carform").serialize(),
                success: function (data){
                    alert("Car added successfully");
                },
                error: function () {
                    alert("oopsyyy :/ name already exists");
                }
            })
        })
    });
