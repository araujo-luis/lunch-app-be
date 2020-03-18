import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'lunchs' })
class Lunch {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column()
    @IsNotEmpty()
    public plate_name: string;

    @Column()
    @IsNotEmpty()
    public plate_description: string;

    @Column()
    @IsNotEmpty()
    public restaurant_name: string;

    @Column()
    @IsNotEmpty()
    public category: string;

    @Column()
    @IsNotEmpty()
    public price: number;

    @Column()
    @IsNotEmpty()
    public plate_image: string;
}

export default Lunch;