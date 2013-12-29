var Data = require('./data');
module.exports = function(server) {
	var findAll = function(frag){
		return [].slice.call(Data[frag]);
	};
  // Create an API namespace, so that the root does not
  // have to be repeated for each end point.
	server.namespace('/api', function() {

		// find all
		var models = ['forums','topics','posts','notifications','messages','members'];
		models.forEach(function(model){
			var mod = model;
			server.get('/'+mod,function(req,res){
				console.log('findall',mod);
				res.send(findAll(mod));
			});
			server.get('/'+mod+'/:id', function(req,res){
				console.log('find',mod);
				var response = Data[mod].filter(function(item){
					return item.id == req.params.id;
				});
				res.send(response[0]);
			});
		});
/*
		server.get('/forums/:id', function(req,res){
			var response = Data.forums.filter(function(forum){
				return forum.id == req.params.id;
			});
			res.send(response[0]);
		});

		server.get('/topics/:id',function(req,res){
			var response = Data.topics.filter(function(topic){
				return topic.id == req.params.id;
			});
			res.send(response[0]);
		});
		server.get('/posts/:id',function(req,res){
			var response = Data.posts.filter(function(post){
				return post.id == req.params.id;
			});
			res.send(response[0]);
		});
*/
/*
		server.get('/forums/:id', function(req,res){

			var response = {};
			var topics;
			var posts;
			var forum = Data.forums.filter(function(forum){
					console.log('checking id',forum, forum.id+'='+req.params.id+':'+(forum.id == req.params.id));
					return forum.id == req.params.id;
				});
			if(forum.length > 0){
				response.forum = forum[0];
				response.topic = forum[0].topics.map(function(id){
					// should only match one topic
					var topics = Data.topics.filter(function(item){
						return item.id == id;
					});
					return topics[0];
				});
				var postList = [];
				response.topic.forEach(function(topic){
					var posts = topic.posts;
					posts.forEach(function(post){
						if(postList.indexOf(post) == -1){
							postList.push(post);
						}
					});
				});
				console.log('posts',postList);
				response.post = postList.map(function(id){
						var filteredPosts = Data.posts.filter(function(item){
							return item.id == id;
						});
						return filteredPosts[0];
				});
				//console.log('filtered response',response);

			}
			res.send(response[0]);
		});
*/
	});
};
