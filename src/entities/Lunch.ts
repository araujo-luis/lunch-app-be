import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Lunch {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public plate_name: string;

    @Column()
    public plate_description: string;

    @Column()
    public restaurant_name: string;

    @Column()
    public category: string;

    @Column()
    public price: number;

    @Column()
    public plate_image: string;
}

export default Lunch;