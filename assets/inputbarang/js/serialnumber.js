//var $jqDate = jQuery('input[name="jqueryDate"]');

$("input[type='serialnumber']").serialnumberinput({
    /*
     The following configuration would allow a serial number of the format 000\00\A
     */
    "separator": "\\",
    "pieces":
    [
        {
            "length": 3,
            "pattern": "[0-9]",
        },
        {
            "type": "separator",
        },
        {
            "length": 2,
            "pattern": "[0-9]",
        },
        {
            "type": "separator",
        },
        {
            "length": 1,
            "pattern": "[a-zA-Z]",
        },
    ],
});