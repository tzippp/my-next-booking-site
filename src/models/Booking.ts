import type { Document } from 'mongoose';
import { model, models, Schema } from 'mongoose';

export type IBooking = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  createdAt: Date;
} & Document;

const BookingSchema = new Schema<IBooking>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default models.Booking || model<IBooking>('Booking', BookingSchema);
