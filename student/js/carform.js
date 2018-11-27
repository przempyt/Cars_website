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
                    // alert("oops, probably this name already exists");
                    alert("oopsyyy :/ cannot add car");
                }
            })
        })
    });

    function inform(){
        alert("inform2");
    }