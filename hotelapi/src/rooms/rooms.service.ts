import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { v4 } from 'uuid';

@Injectable()
export class RoomsService {
  rooms: Room[] = [
    {
    roomNumber: '101',
    roomType: 'Deluxe',
    amenities: 'AC, TV, WiFi',
    price: 100,
    photos: 'https://example.com/deluxe.jpg',
    checkinTime: new Date('2025-10-01T14:00:00'),
    checkoutTime: new Date('2025-10-02T12:00:00'),
    rating: 4.5,
  },
  {
    roomNumber: '102',
    roomType: 'Suite',
    amenities: 'AC, TV, WiFi, Mini Bar',
    price: 200,
    photos: 'https://example.com/suite.jpg',
    checkinTime: new Date('2025-10-01T14:00:00'),
    checkoutTime: new Date('2025-10-02T12:00:00'),
    rating: 3.8,
  },
  {
    roomNumber: '103',
    roomType: 'Standard',
    amenities: 'AC, TV',
    price: 80,
    photos: 'https://example.com/standard.jpg',
    checkinTime: new Date('2025-10-01T14:00:00'),
    checkoutTime: new Date('2025-10-02T12:00:00'),
    rating: 4.1,
  },
  {
    roomNumber: '104',
    roomType: 'Luxury',
    amenities: 'AC, TV, WiFi, Mini Bar, Spa',
    price: 300,
    photos: 'https://example.com/luxury.jpg',
    checkinTime: new Date('2025-10-01T14:00:00'),
    checkoutTime: new Date('2025-10-02T12:00:00'),
    rating: 5.0,
  }
  ];
  create(createRoomDto: CreateRoomDto) {
    console.log(createRoomDto);
    createRoomDto.roomNumber = v4();
    console.log(createRoomDto);
    this.rooms = [...this.rooms, createRoomDto];
    console.log(this.rooms);
    return this.rooms;
  }

  findAll() {
    return this.rooms;
  }

  findOne(id: string) {
    return this.rooms.find((room) => room.roomNumber === id);
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    return this.rooms.map((room) => {
      if (room.roomNumber === id) {
        return updateRoomDto;
      }
      return room;
    });
  }

  remove(id: string) {
    return this.rooms.filter((room) => room.roomNumber !== id);
  }
}
