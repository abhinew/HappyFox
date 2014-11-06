/**
 * Created by Abhinaya on 11/4/14.
 */

(function() {
    var $changeStatusDialog;
    var $statusContainer;

    $(window).load(function() {
        $(".status-container label").click(showChangeStatusDialog);
        $(".edit-ticket-status ul li a").click(setCurrentStatus);
        $changeStatusDialog = $(".edit-ticket-status");
        $statusContainer = $(".status-container");
        $("body").on("click",clickedOutsideDialogHandler);
        $("#reply").click(showReplyDialog);
        $("#private-note").click(showPrivateNoteDialog);


        $(".close").click(function () {
            $(this).closest(".overlay").hide();
        })
        $(".overlay-shower").click(function () {
            $(this).find(".overlay").fadeToggle();
        })
    });

    function showChangeStatusDialog() {
        $(".edit-ticket-status").toggleClass("open");
    }

    function closeChangeStatusDialog() {
        $changeStatusDialog.removeClass("open");
    }

    function setCurrentStatus() {
        $(".status-container label").removeClass("current");
        var classname = $(this).attr('class');
        $(".status-container").find("." + classname).trigger('click').addClass("current");
        closeChangeStatusDialog();
    }

    function isTargetInsideDialog() {
        return $.contains($changeStatusDialog, event.target) === true;
    }

    function isTargetTheStatusButton() {
        return $.contains($statusContainer.get(0), event.target) === true;
    }

    function clickedOutsideDialogHandler() {
        if ( !isTargetInsideDialog() && !isTargetTheStatusButton() ) {
            closeChangeStatusDialog();
        }
    }

    function showReplyDialog(){
        $(".reply-box").slideToggle("open");
    }
    function showPrivateNoteDialog(){
        $(".private-note-box").slideToggle("open");
    }
})();



