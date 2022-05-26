import mongoose from 'mongoose';

const paletteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    palette: [
        {
            color1: {
                type: String,
                required: true,
                unique: false,
            },
            color2: {
                type: String,
                required: true,
                unique: false,
            },
            color3: {
                type: String,
                required: true,
                unique: false,
            },
            color4: {
                type: String,
                required: true,
                unique: false,
            },
            color5: {
                type: String,
                required: true,
                unique: false,
            },
        },
    ],
});

export const Palette = mongoose.model('Palette', paletteSchema);
