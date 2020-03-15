import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Lunch {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    public plate_name: string | undefined;

    @Column()
    public plate_description: string | undefined;

    @Column()
    public restaurant_name: string | undefined;

    @Column()
    public category: string | undefined;

    @Column()
    public price: number | undefined;

    @Column()
    public plate_image: string | undefined
}

export default Lunch;