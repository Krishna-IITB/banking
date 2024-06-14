import Headerbox from '@/components/ui/Headerbox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';


const Home = () => {
    const loggedIn = { firstName: 'Krishna' , lastName: 'Singh' , email: 'krishnasingh89200@gmail.com'};
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    
                    <Headerbox 
                    type= "greeting"
                    title= "Welcome"
                    user= {loggedIn?.firstName || 'Guest'}
                    subtext= "  Access and manage your account and transactions efficiently. "
                    />
                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={124.35}
                    />
                    
                </header>
                RECENT TRANSACTION
            </div>
            <RightSidebar 
                user={loggedIn}
                transactions={[]}
                 banks={[{currentBalance:123.35} , {currentBalance:523.35}]}
            />
        </section>
    )
}

export default Home;
