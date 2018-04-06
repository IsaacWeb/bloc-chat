(function() {
    function Message($firebaseArray, $cookies) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function (roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        };

        Message.send = function(newMessage, activeRoom) {
          messages.$add({
            content: newMessage,
            roomId: activeRoom.$id,
            sentAt: 'time date',
            username: $cookies.get('blocChatCurrentUser')
          });
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray','$cookies', Message]);
})();
