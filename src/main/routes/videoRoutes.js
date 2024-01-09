import { VideoController } from "../controllers/videoController.js";

const videoController = new VideoController();

export function videoRoutesSetup(server) {
    server.post('/videos', async (req,res) => videoController.create(req,res));

    server.get('/videos', async (req, res) => videoController.getAll(req, res));
    
    server.get('/videos/:id', async (req, res) => videoController.getById(req, res));
    
    server.put('/videos/:id', async (req, res) => videoController.update(req, res));
    
    server.delete('/videos/:id', async (req, res) => videoController.delete(req, res));
}



